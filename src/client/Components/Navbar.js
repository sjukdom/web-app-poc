import React, {
  Component
} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Menu,
  IconButton,
  Badge,
  withStyles,
  MenuItem,
  MuiThemeProvider,
  createMuiTheme
} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import {
  fade
} from '@material-ui/core/styles/colorManipulator';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const searchBarWidth = 300;
const searchBarMargin = 35;

const styles = theme => ({

  root: {
    width: '100%',
    flexGrow: 0,
    border: 0,
  },

  grow: {
    flexGrow: 1,
  },

  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },

  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.10),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * searchBarMargin,
      width: 'auto',
    },
  },

  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  inputRoot: {
    color: 'inherit',
    width: '100%',
  },

  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: searchBarWidth,
    },
  },

  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },

  appBar: {
    top: 'auto',
    bottom: 0,
  }
});

const theme = createMuiTheme({
  palette: {
      secondary: {
          main: '#1db954'
      },
      primary: {
        main: '#383838',
      }
  },
});

class Navbar extends Component {

  state = {
    anchorEl: null
  };

  handleProfileMenuOpen = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };
  handleMenuClose = () => {
    this.setState({
      anchorEl: null
    });
  };
  handleSubmitSearch = event => {
    if (event.key === 'Enter') {
      let text = event.target.value;
      if (text.length === 0) {
        console.log('Empty field');
        fetch('/api/artistas/all', {method: 'GET'})
        .then(res => res.json())
        .then(data => {
          console.log(data);
        });
      } else {
        console.log(text);
        fetch(`/api/artistas/nombre/${text}`, {method: 'GET'})
        .then(res => res.json())
        .then(data => {
          this.props.search(data);
        });
      }
    }
  };

  render() {

    const { anchorEl } = this.state;
    const { classes } = this.props;
    const { items } = this.props;
    const isMenuOpen = Boolean(anchorEl);

    const renderMenu = (
      <Menu
      anchorEl = {
        anchorEl
      }
      anchorOrigin = {
        {
          vertical: 'top',
          horizontal: 'right'
        }
      }
      transformOrigin = {
        {
          vertical: 'top',
          horizontal: 'right'
        }
      }
      open = {
        isMenuOpen
      }
      onClose = {
        this.handleMenuClose
      } >
      <MenuItem onClick = {
        this.handleMenuClose
      }> Perfil </MenuItem>
      <MenuItem onClick = {
        this.handleMenuClose
      }> Salir </MenuItem>
      </Menu >
    );

    return (
    <div className = {classes.root} >
    <MuiThemeProvider theme={theme}>
      <AppBar position = "static" color='primary'>
      <Toolbar>
      <Typography className = {classes.title} variant = "h6" color = "inherit" noWrap >
      Portal del cliente
      </Typography>
      <div className = {classes.search}>
      <div className = {classes.searchIcon}>
      <SearchIcon/>
      </div>
      <InputBase
        placeholder = ""
        classes = {
          {
            root: classes.inputRoot,
            input: classes.inputInput,
          }
        }
        onKeyDown = {
          this.handleSubmitSearch
        }
      />
      </div >
      <div className = {classes.grow}/>
      <div className = {classes.sectionDesktop}>
      <IconButton color = "inherit" >
        <Badge badgeContent = {items} color = "secondary" >
          <ShoppingCartIcon / >
        </Badge>
      </IconButton >
      <IconButton
      aria-owns = {isMenuOpen ? 'material-appbar' : undefined}
      aria-haspopup = 'true'
      onClick = {
        this.handleProfileMenuOpen
      }
      color = 'inherit'>
        <AccountCircle/>
      </IconButton>
      </div >
      </Toolbar>
      </AppBar >
      </MuiThemeProvider>
      {renderMenu}
      </div>
    );
  }
}

export default withStyles(styles)(Navbar);