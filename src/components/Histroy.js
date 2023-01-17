import React from 'react'
import { Container, Table } from 'react-bootstrap'

function Histroy() {
  return (
    <div>
      <Container>
      <h1>Hello</h1>
        <Table striped bordered hover variant="dark">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Original URL</th>
                      <th>Shortened URL</th>
                      <th>Expiry Date</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                  </tr>
                  {/* <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td colSpan={2}>Larry the Bird</td>
                      <td>@twitter</td>
                  </tr> */}
              </tbody>
          </Table>
      </Container>
    </div>
  )
}

export default Histroy