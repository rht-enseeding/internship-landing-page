import React, { useEffect, useState } from 'react'
import styles from './addProjectTextField.module.scss'
import Form from 'react-bootstrap/Form'
import DateRangeCalender from './DateRangeCalender'
import UploadImg from '../../../Assets/icons/UploadImg.svg'
import AddprojectTable from './AddprojectTable/AddprojectTable'
import { Button } from 'react-bootstrap'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import CustomMenuProject from './CustomMenuProject'
import { useDispatch } from 'react-redux'
import { createProjectAction } from '../../../redux/actions/projectAction'

const AddProjectTextFields = ({ setShow }) => {
  const dispatch = useDispatch()
  const handleClose = () => setShow(false)

  const [status, setstatus] = useState()
  const [visibility, setvisibility] = useState()
  const [categoryIds, setcategoryIds] = useState()

  const [p_TitleTable, setP_TitleTable] = useState()
  const [p_DescriptionTable, setP_DescriptionTable] = useState()
  const [p_LinkTable, setP_LinkTable] = useState()
  const [p_StartDateTable, setP_StartDateTable] = useState()
  const [p_EndDateTable, setP_EndDateTable] = useState()

  const p_StatusMenuItem = [
    {
      title: 'Active',
      value: '1',
    },
    {
      title: 'Inactive',
      value: '0',
    },
  ]
  const p_VisibilityMenuItem = [
    {
      title: 'Visible',
      value: '1',
    },
    {
      title: 'Invisible',
      value: '0',
    },
  ]
  const p_CategoryMenuItem = [
    { title: '6485a62686c6e16eb58cd39f', value: '6485a62686c6e16eb58cd39f' },
    { title: '6485a62686c6e16eb58cd39f', value: '6485a62686c6e16eb58cd39f' },
    { title: '6485a62686c6e16eb58cd39f', value: '6485a62686c6e16eb58cd39f' },
  ]

  const [formData, setFormData] = useState()
  const [data, setData] = useState({
    projectTitle: '',
    projectDescription: '',
    projectLink: '',
    projectImage: null,
    comments: '',
    projectMilestone: '',
    startDate: '',
    endDate: '',
  })

  const handleFileChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.files[0] })
  }
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleTableData = () => {
    setP_TitleTable(data.projectTitle)
    setP_DescriptionTable(data.projectDescription)
    setP_LinkTable(data.projectLink)
    setP_StartDateTable(data.startDate)
    setP_EndDateTable(data.endDate)
  }

  useEffect(() => {
    handleTableData()
  }, [data])

  const handleSubmit = () => {
    const {
      projectTitle,
      projectDescription,
      projectLink,
      projectImage,
      comments,
      projectMilestone,
      startDate,
      endDate,
    } = data
    setFormData({
      ...formData,
      projectTitle: projectTitle,
      projectDescription: projectDescription,
      projectLink: projectLink,
      // projectImage: projectImage,
      projectImage: 'difficult_project_link_again',
      comments: [comments],
      projectMilestone: projectMilestone,
      visibility: visibility,
      categoryIds: categoryIds,
      status: status,
      startDate: startDate,
      endDate: endDate,
      userId: '646c6d42cbec5de36e71ed1c',
    })

    dispatch(createProjectAction(formData))
    // console.log('data', formData)
    setTimeout(() => {
      handleClose()
    }, 1000)
  }

  return (
    <div style={{ marginTop: '30px' }}>
      <div className={styles.textFieldOneDiv1}>
        <div className={styles.textFieldH1}>Project Title</div>
        <div className={styles.textFieldBody1}>
          {/* Crypto Web Designing Project */}
          <input
            type="text"
            name="projectTitle"
            id="Project Title"
            onChange={handleChange}
            value={data.projectTitle}
            className={styles.inputOneProject1}
          />
        </div>
      </div>
      <div className={styles.textFieldOneDiv1}>
        <div className={styles.textFieldH1}>Project Description</div>
        <div className={styles.textFieldBody1}>
          {/* Cryptocurrency */}
          <input
            type="text"
            onChange={handleChange}
            value={data.projectDescription}
            name="projectDescription"
            id="projectDescription"
            className={styles.inputOneProject1}
          />
        </div>
      </div>
      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Project Link</div>
        <div className={styles.textFieldBody1}>
          <input
            type="text"
            name="projectLink"
            id="projectLink"
            onChange={handleChange}
            value={data.projectLink}
            className={styles.inputOneProject1}
          />
        </div>
      </div>
      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Start Date</div>
        <div className={styles.textFieldBody1}>
          {/* <DateRangeCalender
            startDate={startDate}
            setstartDate={setstartDate}
          /> */}
          <input
            type="text"
            name="startDate"
            id="startDate"
            value={data.startDate}
            class={styles.calenderInput}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>End Date</div>
        <div className={styles.textFieldBody1}>
          {/* <DateRangeCalender startDate={endDate} setstartDate={setendDate} /> */}
          <input
            type="text"
            name="endDate"
            id="endDate"
            value={data.endDate}
            class={styles.calenderInput}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Project Milestone</div>
        <div className={styles.textFieldBody1}>
          <input
            type="text"
            name="projectMilestone"
            id="projectMilestone"
            class={styles.arrowInput}
          />
        </div>
      </div> */}
      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Project Milestone</div>
        <div className={styles.textFieldBody1}>
          <input
            type="text"
            name="projectMilestone"
            id="dropdown-basic-button"
            onChange={handleChange}
            value={data.projectMilestone}
            className={styles.arrowInput}
          />
          {/* <CustomMenuProject
            stateProp={projectMilestoneField}
            setFuncProp={setprojectMilestoneField}
          /> */}
        </div>
      </div>
      {/* <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Status</div>
        <div className={styles.textFieldBody1}>
          <input
            type="text"
            name="Status"
            id="Status"
            className={styles.arrowInput}
          />
        </div>
      </div> */}
      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Status</div>
        <div className={styles.textFieldBody1}>
          {/* <input
            type="text"
            name="Visibility"
            id="dropdown-basic-button"
            className={styles.arrowInput}
          /> */}
          <CustomMenuProject
            stateProp={status}
            setFuncProp={setstatus}
            // setFuncProp={setData}
            menuItemProp={p_StatusMenuItem}
          />
        </div>
      </div>

      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Visibility</div>
        <div className={styles.textFieldBody1}>
          {/* <input
            type="text"
            name="Visibility"
            id="dropdown-basic-button"
            className={styles.arrowInput}
          /> */}
          <CustomMenuProject
            stateProp={visibility}
            setFuncProp={setvisibility}
            // setFuncProp={setData}
            menuItemProp={p_VisibilityMenuItem}
          />
        </div>
      </div>
      {/* <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Category</div>
        <div className={styles.textFieldBody1}>
          <input
            type="text"
            name="projectLink"
            id="projectLink"
            className={styles.arrowInput}
          />
        </div>
      </div> */}
      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Category</div>
        <div className={styles.textFieldBody1}>
          {/* <input
            type="text"
            name="Visibility"
            id="dropdown-basic-button"
            className={styles.arrowInput}
          /> */}
          <CustomMenuProject
            stateProp={categoryIds}
            setFuncProp={setcategoryIds}
            // setFuncProp={setData}
            menuItemProp={p_CategoryMenuItem}
          />
        </div>
      </div>
      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Upload Image</div>
        <div className={styles.textFieldBody1}>
          <div class={styles.imageUploadDiv}>
            <label for="file-input">
              <img
                src={UploadImg}
                // name="projectImage"
                style={{ pointerEvents: 'none' }}
              />
              <div className={styles.uploadImgH1}>Upload Image</div>
            </label>

            <input
              id="file-input"
              name="projectImage"
              type="file"
              onChange={handleFileChange}
              style={{ visibility: 'hidden', width: 0, height: 0 }}
            />
          </div>
        </div>
      </div>

      <div className={styles.tableDiv1}>
        <div className={styles.textFieldH1} style={{ marginBottom: '40px' }}>
          Projects Table
        </div>
        <div style={{ width: '95%' }}>
          <AddprojectTable
            p_TitleTable={p_TitleTable}
            p_DescriptionTable={p_DescriptionTable}
            p_LinkTable={p_LinkTable}
            p_StartDateTable={p_StartDateTable}
            p_EndDateTable={p_EndDateTable}
          />
        </div>
      </div>

      <div className={styles.textFieldDiv1}>
        <div className={styles.textFieldH1}>Additional Remarks</div>
        <div className={styles.textFieldBody1}>
          <textarea
            type="text"
            name="comments"
            id="comments"
            value={data.comments}
            onChange={handleChange}
            rows="10"
            className={styles.inputProject2}
          />
        </div>
      </div>

      <div style={{ marginTop: '70px', marginBottom: '40px' }}>
        <Button variant="outlined" className={styles.btn1}>
          Save as Draft
        </Button>
        <Button onClick={handleSubmit} className={styles.btn2}>
          Save and Upload
        </Button>
      </div>
    </div>
  )
}

export default AddProjectTextFields
