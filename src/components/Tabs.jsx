import React from 'react'
import { TableContainer,Table,TableBody,TableHead ,TableCell,TableRow} from '@mui/material'
const Tabs = () => {
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell >Name</TableCell> 
                    
                    <TableCell >Age</TableCell>
                    
                    <TableCell >Place</TableCell>
                
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell>Eby</TableCell>
                    <TableCell>19</TableCell>
                    <TableCell>Chalakudy</TableCell>
                </TableRow>
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Tabs
