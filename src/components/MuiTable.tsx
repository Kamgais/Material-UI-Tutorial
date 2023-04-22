import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';

const MuiTable = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight: '300px'}}>
        <Table aria-aria-label='simple-label' stickyHeader>
        <TableHead>
            <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>First name</TableCell>
                <TableCell>Last name</TableCell>
                <TableCell>Email</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {
                tableData.map((row) => (
                    <TableRow key={row.id}  sx={{'&:last-child td, &:last-child th': {border: 0}}}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.first_name}</TableCell>
                            <TableCell>{row.last_name}</TableCell>
                            <TableCell>{row.email}</TableCell>
                    </TableRow>
                ))
            }
        </TableBody>
        </Table>
    </TableContainer>
  )
}

const tableData = [{
    "id": 1,
    "first_name": "Liz",
    "last_name": "Rigate",
    "email": "lrigate0@wikimedia.org",
    "gender": "Female",
    "ip_address": "171.111.120.13"
  }, {
    "id": 2,
    "first_name": "Chandal",
    "last_name": "Clarabut",
    "email": "cclarabut1@posterous.com",
    "gender": "Non-binary",
    "ip_address": "208.66.30.199"
  }, {
    "id": 3,
    "first_name": "Mervin",
    "last_name": "Tregenna",
    "email": "mtregenna2@stumbleupon.com",
    "gender": "Male",
    "ip_address": "23.110.74.4"
  }, {
    "id": 4,
    "first_name": "Westbrooke",
    "last_name": "Verrier",
    "email": "wverrier3@deliciousdays.com",
    "gender": "Genderqueer",
    "ip_address": "171.150.82.204"
  }, {
    "id": 5,
    "first_name": "Marys",
    "last_name": "Dobbin",
    "email": "mdobbin4@netscape.com",
    "gender": "Female",
    "ip_address": "204.73.149.88"
  }, {
    "id": 6,
    "first_name": "Edan",
    "last_name": "Cuskery",
    "email": "ecuskery5@printfriendly.com",
    "gender": "Male",
    "ip_address": "10.41.180.127"
  }, {
    "id": 7,
    "first_name": "Paula",
    "last_name": "Michelin",
    "email": "pmichelin6@nyu.edu",
    "gender": "Female",
    "ip_address": "221.101.95.1"
  }, {
    "id": 8,
    "first_name": "Codie",
    "last_name": "Minall",
    "email": "cminall7@indiatimes.com",
    "gender": "Male",
    "ip_address": "0.203.193.248"
  }, {
    "id": 9,
    "first_name": "Fernando",
    "last_name": "Spennock",
    "email": "fspennock8@symantec.com",
    "gender": "Male",
    "ip_address": "29.152.42.162"
  }, {
    "id": 10,
    "first_name": "Zebadiah",
    "last_name": "Lenard",
    "email": "zlenard9@ask.com",
    "gender": "Male",
    "ip_address": "207.15.72.22"
  }]
  

export default MuiTable