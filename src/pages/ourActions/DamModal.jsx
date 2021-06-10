import React from 'react'
import {  Modal, ModalHeader, ModalBody, Table } from 'reactstrap';
import File from './Sample.pdf'

const DamModal = ({selectedDam, setSelectedDam}) => {
    const toggleDam = () => {
      setSelectedDam(null)
    }
    return (
      <Modal isOpen={selectedDam} toggle={toggleDam} >
        <ModalHeader toggle={toggleDam} charCode={<strong>X</strong>} >
          INTERVENTION
        </ModalHeader>
        <ModalBody>
          <p className='text-center'><strong>{selectedDam?.city}, {selectedDam?.state}</strong></p>
          <Table bordered>
          <tbody>
            <tr>
              <td>Intervention Name</td>
              <td>Project XYZ</td>
            </tr>
            <tr>
              <td>Timeline</td>
              <td>2010-2015</td>
            </tr>
            <tr>
              <td>Partner Info</td>
              <td><a href="http://www.dscindia.org/" target="_blank" rel="noopener noreferrer">Read More</a></td>
            </tr>
            <tr>
              <td>Read Stories</td>
              <td><a href="https://www.coca-colaindia.com/stories/sustainability/water-stewardship/a-check-dam-that-solved-mathura-devis-water-worries-" target="_blank" rel="noopener noreferrer">Read More</a></td>
            </tr>
            <tr>
              <td>Reports</td>
              <td><a href={File} download>Download</a></td>
            </tr>
            <tr>
              <td>Media</td>
              <td>Media</td>
            </tr>
            <tr>
              <td>Sharing Options</td>
              <td>
                <i class="fa fa-whatsapp share-icon" style={{color:"green"}}></i>
                <i class="fa fa-facebook-f share-icon" style={{color:"#4867AB"}}></i>
                <i class="fa fa-instagram share-icon" style={{color:"red"}}></i>
                <i class="fa fa-twitter share-icon" style={{color:"skyblue"}}></i>
              </td>
            </tr>
          </tbody>
        </Table>
        </ModalBody>
      </Modal>
    )
}

export default DamModal
