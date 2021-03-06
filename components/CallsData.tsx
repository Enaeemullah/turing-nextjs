import { useState, useEffect } from 'react';
// import Button from 'react-bootstrap/Button';
import Button from '@geist-ui/core/esm/button';
import Spinner from '@geist-ui/core/esm/spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import style from '../styles/Data.module.css';
import axios from 'axios';
import { MDBDataTableV5 } from 'mdbreact';
import { isEmpty } from '../utils/Common';
import { BaseURL } from '../utils/BaseURL';
import HashLoader from 'react-spinners/HashLoader';
import swal from 'sweetalert';
import { Container } from 'react-bootstrap';
import { FiUser } from 'react-icons/fi';

import { FiArrowRight, FiRefreshCcw } from 'react-icons/fi';

export default function CallsData() {
  const [posts, setPosts] = useState({});
  const [loaded, setLoaded] = useState(false);
  const [datatable, setDatatable]: any = useState({});
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(100);
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();
  const [hasNextPage, setHasNextPage] = useState(true);
  const [totalCount, setTotalCount] = useState(0);

  const nextPage = () => {
    setOffset(offset + 5);
    setLoaded(false);
  };

  const refreshToken = () => {
    const userObject = {
      username: email,
      password: password,
    };

    axios
      .post(BaseURL + 'auth/refresh-token', userObject, {
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('token'),
        },
      })
      .then((res) => {
        console.log(res.data);
        console.log(res.data.access_token);

        sessionStorage.setItem('token', res.data.access_token);
        if (!isEmpty(res?.data?.access_token)) {
          swal({
            text: 'Token has been updated successfully!',
            icon: 'success',
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    const accessToken = sessionStorage.getItem('token');
    axios
      .get(BaseURL + `calls?offset=${offset}&limit=${limit}`, {
        headers: {
          Authorization: 'Bearer ' + accessToken,
        },
      })
      .then((res) => {
        setPosts(res.data.nodes);
        console.log(res.data.nodes);

        setTotalCount(res.data.totalCount);
        setHasNextPage(res.data.hasNextPage);
        for (const row of res.data.nodes) {
          row.is_archived = row.is_archived.toString();
        }
        setDatatable({
          columns: [
            {
              label: 'From',
              field: 'from',
              width: 150,
              attributes: {
                'aria-controls': 'DataTable',
                'aria-label': 'from',
              },
            },
            {
              label: 'To',
              field: 'to',
              width: 150,
            },
            {
              label: 'Direction',
              field: 'direction',
              width: 150,
            },
            {
              label: 'Call Type',
              field: 'call_type',
              width: 150,
            },
            {
              label: 'Created date',
              field: 'created_at',
              width: 150,
            },
            {
              label: 'Via',
              field: 'via',
              sort: 'disabled',
              width: 100,
            },
            {
              label: 'Duration',
              field: 'duration',
              width: 100,
            },
            {
              label: 'isArchived',
              field: 'is_archived',
              width: 150,
            },
          ],
          rows: res.data.nodes,
        });
        setLoaded(true);
        console.log(res.data.nodes);
        console.log(res);
      });
  }, [offset, limit]);

  return (
    <div className={style.calls}>
      <div className='container'>
        {!loaded && (
          <div className='loader'>
            {/* <HashLoader color={'#7A7676'} size={70} /> */}
            <Spinner />
          </div>
        )}

        {loaded && (
          <div className='calls-data'>
            <div className='headings'>
              <div>
                <Container>
                  <h2>Users Information</h2>
                </Container>
                {hasNextPage ? (
                  <Button
                    // type='button'
                    className='btn btn-outline-secondary'
                    onClick={() => {
                      setOffset(offset + 5);
                      setLoaded(false);
                    }}
                  >
                    Next Page
                    {/* <FiArrowRight /> */}
                  </Button>
                ) : (
                  <Button
                    // type='button'
                    className='btn btn-outline-secondary'
                    onClick={nextPage}
                  >
                    Next Page
                    {/* <FiArrowRight color={'#4f8'} /> */}
                  </Button>
                )}

                <Button
                  // type='button'
                  className='btn btn-outline-secondary ml-3'
                  onClick={refreshToken}
                >
                  RefreshToken
                  {/* <FiRefreshCcw className='ml-1' /> */}
                </Button>
              </div>
              <div>
                <div>
                  {/* <i className='fa fa-user m-3' aria-hidden='true'></i> */}
                  <FiUser />
                  {/* User */}
                </div>
                <div className='mt-7 float-end'>
                  {offset + 1 + ' to ' + (offset + 5) + ' of '}{' '}
                  <b>{totalCount}</b>
                </div>
              </div>
            </div>
            <MDBDataTableV5
              hover
              entriesOptions={[5, 20, 25]}
              entries={5}
              pagesAmount={4}
              data={datatable}
            />
            <br />
          </div>
        )}
      </div>
    </div>
  );
}
