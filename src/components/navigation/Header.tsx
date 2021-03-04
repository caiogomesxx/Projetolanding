import { Button, Drawer } from '@material-ui/core'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import clsx from 'clsx'
import React from 'react'
import LogoIMG from '../../assets/logo.png'
import styles from '../../styles/components/navigation/Header.module.css'

function Header(): JSX.Element {
  const useStyles = makeStyles({
    list: {
      width: 250
    },
    fullList: {
      width: 'auto'
    }
  })

  const classes = useStyles()
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const toggleDrawer = (anchor, open) => event => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = anchor => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom'
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          'Início',
          'Nossa investidora',
          'Vantagens',
          'Quem somos',
          'Contato'
        ].map(text => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  )

  return (
    <header className={styles.header_body}>
      <img src={LogoIMG} className={styles.logo} />
      <div className={styles.button}>
        <button className={styles.buttonChild}>Início</button>
        <button className={styles.buttonChild}>Nossa investidora</button>
        <button className={styles.buttonChild}>Vantagens</button>
        <button className={styles.buttonChild}>Quem somos</button>
        <button className={styles.buttonChild}>Contato</button>
      </div>
      <div className={styles.drawerButton}>
        <Button onClick={toggleDrawer('right', true)}>
          <MenuIcon fontSize="large" />
        </Button>
      </div>

      <Drawer
        anchor={'right'}
        open={state.right}
        onClose={toggleDrawer('right', false)}
      >
        {list('right')}
      </Drawer>
    </header>
  )
}

export { Header }
