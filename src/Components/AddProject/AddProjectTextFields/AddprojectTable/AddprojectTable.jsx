import React from 'react'
import Table from 'react-bootstrap/Table'
import styles from './addProjectTable.module.scss'
import './addProjectTable.css'
import LinkIcon from '../../../../Assets/icons/link21.svg'

function AddprojectTable({
  p_TitleTable,
  p_DescriptionTable,
  p_LinkTable,
  p_StartDateTable,
  p_EndDateTable,
}) {
  return (
    <div>
      <Table
        responsive="sm"
        className="mytable"
        style={{ overflowX: 'scroll' }}
      >
        <thead class="tHead">
          <tr>
            <th>Project Title</th>
            <th>Project Description</th>
            <th>Project Link</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody className="tbody">
          <tr className="first-tr">
            <td>
              {(p_TitleTable && p_TitleTable) || 'Crypto Web Designing Project'}
            </td>
            <td>
              {(p_DescriptionTable && p_DescriptionTable) ||
                'Crypto Web Designing Project'}
            </td>
            <td>
              {' '}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={LinkIcon} alt="" />
                <div style={{ marginLeft: '5px' }}>
                  {(p_LinkTable && p_LinkTable) || 'webdesignfiles.com'}
                </div>
              </div>{' '}
            </td>
            <td>{(p_StartDateTable && p_StartDateTable) || '23 March 2023'}</td>
            <td>{(p_EndDateTable && p_EndDateTable) || '23 March 2023'}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

export default AddprojectTable
