
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers'
import MuiPicker from './components/MuiPicker'
// import MuiDialog from './components/MuiDialog'
//import MuiProgress from './components/MuiProgress'
//import MuiSkeleton from './components/MuiSkeleton'
//import MuiAlert from './components/MuiAlert'
//import MuiSnackbar from './components/MuiSnackbar'
// import MuiTable from './components/MuiTable'
// import MuiChip from './components/MuiChip'
// import MuiTooltip from './components/MuiTooltip'
// import MuiAvatar from './components/MuiAvatar'
 // import MuiBadge from './components/MuiBadge'
// import MuiList from './components/MuiList'
// import MuiBottomNavigation from './components/MuiBottomNavigation'
// import MuiBreadcrumbs from './components/MuiBreadcrumbs'
// import MuiDrawer from './components/MuiDrawer'
// // import MuiLink from './components/MuiLink'

// import MuiNavbar from './components/MuiNavbar'
// import MuiSpeedDial from './components/MuiSpeedDial'
// import MuiAccordion from './components/MuiAccordion'
// import MuiCard from './components/MuiCard'
// import MuiLayout from './components/MuiLayout'
// import MuiAutocomplete from './components/MuiAutocomplete'
// import MuiRating from './components/MuiRating'
// import MuiCheckbox from './components/MuiCheckbox'
 // import MuiSwitch from './components/MuiSwitch'
// import MuiRadioButton from './components/MuiRadioButton'
// import MuiSelect from './components/MuiSelect'
// import MuiTextField from './components/MuiTextField'
// import MuiButton from './components/MuiButton'
// import MuiTypography from './components/MuiTypography'

function App() {


  return (
    <LocalizationProvider  dateAdapter={AdapterDayjs}>
    <div className='App'>
      <MuiPicker/>
    </div>
    </LocalizationProvider>
  )
}

export default App
