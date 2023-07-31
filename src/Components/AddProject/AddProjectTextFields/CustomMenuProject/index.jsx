import * as React from 'react'
import { styled, alpha } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Divider from '@mui/material/Divider'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,

    // padding-right: 30px !important;
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light'
        ? 'rgb(55, 65, 81)'
        : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        width: '100%',
      },
      [theme.breakpoints.down('md')]: {
        width: '300px',
      },
      [theme.breakpoints.down('lg')]: {
        width: '380px',
      },
      [theme.breakpoints.up('lg')]: {
        width: '380px',
      },
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}))

export default function CustomMenuProject({
  stateProp,
  setFuncProp,
  menuItemProp,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleClickMenu = (e) => {
    handleClose()
    setFuncProp(e.target.getAttribute('value'))
    // setFuncProp({
    //   [e.target.getAttribute('name')]: e.target.getAttribute('value'),
    // })
    // console.log('stateProp', stateProp)
  }

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        // endIcon={<ExpandMoreIcon />}
        sx={{
          backgroundColor: '#fff',
          color: '#000',
          width: { lg: '380px', md: '380px', sm: '380px', xs: '280px' },
          height: '47px',
          border: '1px solid #d9d9d9',
          paddingLeft: '10px',
          display: 'flex',
          justifyContent: 'end',
          ':hover': {
            backgroundColor: '#fff',
            color: '#000',
          },
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'end' }}>
          <ExpandMoreIcon style={{ color: '#BDBDBD', fontSize: '32px' }} />
        </div>
        {/* Options */}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItemProp &&
          menuItemProp.map((item, index) => {
            return (
              <MenuItem
                name={item.title}
                value={item.value}
                onClick={handleClickMenu}
                disableRipple
              >
                {item.title}
              </MenuItem>
            )
          })}

        {/* <MenuItem value="foo2" onClick={handleClickMenu} disableRipple>
          Duplicate
        </MenuItem>
        <Divider sx={{ my: 0.5 }} />
        <MenuItem onClick={handleClickMenu} disableRipple>
          Archive
        </MenuItem>
        <MenuItem onClick={handleClickMenu} disableRipple>
          More
        </MenuItem> */}
      </StyledMenu>
    </div>
  )
}
