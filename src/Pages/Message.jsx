import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import imageicon from '../Assets/image1.png';
import "../App.css";

const Message = () => {
  return (
    <div className='Message  px-4'>
      <h5 className='fw-bold  '>Messages</h5>
      <div className='d-flex direction-row gap-2'>
        <div className={"rounded-3  message-bar px-2"}>
          <h6 className='text-secondary my-3 ms-3' >People</h6>
          <div className='' >
            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />
                <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />


            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />
                <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />
            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />
                <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />

            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />            <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />
            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />            <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />
            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />            <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />
            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />            <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />
            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />            <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />
            <div className='d-flex direction-row justify-content-between '>
              <div className='gap-2 d-flex direction-row align-items-center'>
                <img src={imageicon} alt="" className='rounded-circle' width={'45px'} height={'45px'} />            <div>
                  <h6 className='fw-bold'>Jennifer Johnson</h6>
                  <h6 className='text-secondary'>April fool's day</h6>
                </div>
              </div>
              <div className='text-end'>
                <h6 className='text-secondary'>Today's 9:52 Am</h6>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="blue" className="bi bi-check2-all  " viewBox="0 0 16 16">
                  <path d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                  <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                </svg>
              </div>
            </div>
            <hr className=' text-secondary' />
          </div>
        </div>
        <div className='rounded-3 message-portal w-75 ' >
          <div className='d-flex direction-row justify-content-between align-items-center'>
            <div className='d-flex direction-row align-items-center gap-3' >
              <img src={imageicon} alt="" className='rounded-circle ms-2' width={'45px'} height={'45px'} />
              <div>
                <h5 className="fw-bold" >Tutor</h5>
                <h6 className="text-secondary" > Online - Last seen, 2.02pm</h6>
              </div>
            </div>
            <div className='gap-4 '>
             <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" className=' bi bi-telephone me-3' fill="currentColor" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg></a>
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" className=' bi bi-camera-video me-3' fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5zm11.5 5.175 3.5 1.556V4.269l-3.5 1.556v4.35zM2 4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H2z" />
              </svg></a>
              <a href="#"> <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" className=' bi bi-three-dots-vertical me-3' fill="currentColor" viewBox="0 0 16 16">
                <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
              </svg></a>
            </div>
          </div>
          <hr className='text-secondary mx-3' />
          <div className='mx-3 '>
            <div className='container-fluid'>
              <p className='  px-3 py-2 rounded-pill chat-messages-recieve fs-5 '>Hey There!</p>
              <p className='rounded-pill chat-messages-recieve px-3 py-2 fs-5  '>How are you?</p>
              <h6 className=' px-2 text-secondary'>Today, 8.30pm</h6>
            </div>
            <div className='container text-end '>

              <p className='  float-end rounded-pill chat-messages-send px-3 py-2  fs-5 mb-0  '>Hello!</p><br /><br />
              <p className='  px-2 text-secondary '>Today, 8.33pm</p>
              <p className='   float-end px-3 py-2 rounded-pill chat-messages-send fs-5 mb-0 '>I am fine and how are you?</p><br /><br />
              <p className='  px-2 text-secondary' >Today, 8.34pm</p>

            </div>
            <div className='container'>
              <p className='  px-3 py-2 rounded-pill chat-messages-recieve fs-5 '>I am doing well, Can we meet tomorrow?</p>
              <h6 className=' px-2 text-secondary'>Today, 8.36pm</h6>
            </div>
            <div className='container text-end '>
              <p className='  float-end rounded-pill chat-messages-send px-3 py-2  fs-5 mb-0  '>Sure</p><br /><br />
              <p className='  px-2 text-secondary '>Today, 8.33pm</p>
              <p className='   float-end px-3 py-2 rounded-pill chat-messages-send fs-5 mb-0 '>Can You Help me in assignment?</p><br /><br />
              <p className='  px-2 text-secondary' >Today, 8.35pm</p>
            </div>
            <div className='container'>
              <p className='  px-3 py-2 rounded-pill chat-messages-recieve fs-5 '>Yes Sure i have great expertise in this</p>
              <h6 className=' px-2 text-secondary'>Today, 8.36pm</h6>
            </div>
            <br />


            <div className='d-flex direction-row justify-content-between gap-3 '>
              <div className=' row  container-fluid  '>
                <InputGroup style={{ borderColor: 'transparent', width: '50' }}>
                  <InputGroup.Text style={{ border: 'none', backgroundColor: '#ba9af53b', padding: '15px' }}>
                  <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-paperclip" viewBox="0 0 16 16">
                      <path d="M4.5 3a2.5 2.5 0 0 1 5 0v9a1.5 1.5 0 0 1-3 0V5a.5.5 0 0 1 1 0v7a.5.5 0 0 0 1 0V3a1.5 1.5 0 1 0-3 0v9a2.5 2.5 0 0 0 5 0V5a.5.5 0 0 1 1 0v7a3.5 3.5 0 1 1-7 0V3z" />
                    </svg></a>
                  </InputGroup.Text>
                  <FormControl style={{ border: 'none', backgroundColor: '#ba9af53b' }} placeholder="Type your message here..." size="sm" required />
                  <InputGroup.Text style={{ border: 'none', backgroundColor: '#ba9af53b', padding: '15px' }}>
                  <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-emoji-smile" viewBox="0 0 16 16">
                      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                      <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
                    </svg></a>
                  </InputGroup.Text>
                  <InputGroup.Text style={{ border: 'transparent', backgroundColor: '#ba9af53b', padding: '15px' }}>
                  <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                      <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1v6zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4H2z" />
                      <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zM3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z" />
                    </svg></a>
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div className=' voice-recorder rounded-3'>
              <a href='#'> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="white" className="bi bi-mic-fill  " viewBox="0 0 16 16">
                  <path d="M5 3a3 3 0 0 1 6 0v5a3 3 0 0 1-6 0V3z" />
                  <path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5z" />
                </svg></a>
              </div>


            </div>



          </div>

        </div>


      </div>

    </div >


  )
}

export default Message