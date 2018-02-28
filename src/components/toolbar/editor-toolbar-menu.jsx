import React from 'react'

// import MenuIcon from 'material-ui/svg-icons/navigation/menu'

// import MoreVertIcon from 'material-ui-icons/MoreVert';
import IconButton from 'material-ui/IconButton'
import Menu from 'material-ui/Menu'
import MenuIcon from 'material-ui-icons/Menu'

// import { grey50 } from 'material-ui/styles/colors'
// import IconButton from 'material-ui/IconButton'
// import IconMenu from 'material-ui/IconMenu'
// import MenuItem from 'material-ui/MenuItem'
// import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right'

import tasks from '../../task-definitions'
// import IconMenu from './icon-menu'
import NotebookMenuItem from './notebook-menu-item'
import NotebookMenuSubsection from './notebook-menu-subsection'
import NotebookMenuDivider from './notebook-menu-divider'

import cellMenuSubsection from './cell-menu-subsection'
import iodideExamplesSubsection from './iodide-examples-subsection'

export default class EditorToolbarMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      anchorElement: null,
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }
  handleClick(event) {
    this.setState({ anchorElement: event.currentTarget })
  }

  handleClose() {
    this.setState({ anchorElement: null })
  }

  render() {
    const { anchorElement } = this.state
    return (
      <IconButton
        aria-label="more"
        aria-owns={anchorElement ? 'main-menu' : null}
        aria-haspopup="true"
        onClick={this.handleClick}
        style={{ color: 'white' }}
      >
        <MenuIcon />
        <Menu
          id="main-menu"
          anchorEl={this.state.anchorElement}
          open={Boolean(anchorElement)}
          onClose={this.handleClose}
          anchorReference="anchorPosition"
          anchorPosition={{ top: 62, left: 30 }}

          paperProps={{ width: 200 }}
        >
          <NotebookMenuItem task={tasks.createNewNotebook} />
          <NotebookMenuItem task={tasks.exportNotebook} />

          <NotebookMenuSubsection className="large-menu" title="saved notebooks ... ">
            {iodideExamplesSubsection}
          </NotebookMenuSubsection>

          <NotebookMenuSubsection className="medium-menu" title="cell ...">
            {cellMenuSubsection}
          </NotebookMenuSubsection>

          <NotebookMenuDivider />

          <NotebookMenuSubsection title="view ...">
            <NotebookMenuItem task={tasks.toggleHistoryPane} />
            <NotebookMenuItem task={tasks.toggleDeclaredVariablesPane} />
          </NotebookMenuSubsection>

          <NotebookMenuDivider />

          <NotebookMenuItem task={tasks.fileAnIssue} />
        </Menu>
      </IconButton>

    )
  }
}

// function createMenuItem(task) {
//   return (<MenuItem
//     key={task.title}
//     style={{ fontSize: '13px' }}
//     primaryText={task.menuTitle}
//     secondaryText={task.displayKeybinding}
//     onClick={task.callback}
//   />)
// }

// class AnotherItem extends MenuItem {
//   constructor(props) {
//     const newProps = Object.assign(props,  {
//       key: props.task.title,
//       style: { fontSize: '13px' },
//       primaryText: props.task.menuTitle,
//       secondaryText: props.task.menuTitle
//     })
//     super(newProps)
//   }

//   render() { return { super.render() } }
// }


// export default class EditorToolbarMenu extends React.Component {
//   render() {
//     return (
//       <IconMenu
//         iconButtonElement={<IconButton><MenuIcon color={grey50} /></IconButton>}
//         anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
//         targetOrigin={{ horizontal: 'left', vertical: 'top' }}
//         desktop
//         className="menu-button"
//       >
//         {createMenuItem(tasks.toggleHistoryPane)}
//         <MenuItem
//           primaryText="test ..."
//           rightIcon={<ArrowDropRight />}
//           menuItems={[createMenuItem(tasks.saveNotebook)]}
//         />
//       </IconMenu>

//     )
//   }
// }

// export default class EditorToolbarMenu extends React.Component {
//   render() {
//     return (
//       <IconMenu
//         iconButtonElement={<IconButton><MenuIcon color={grey50} /></IconButton>}
//         anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
//         targetOrigin={{ horizontal: 'left', vertical: 'top' }}
//         desktop
//         className="menu-button"
//       >
//         <AnotherItem task={tasks.toggleHistoryPane} />
//         <MenuItem
//           primaryText="test ..."
//           rightIcon={<ArrowDropRight />}
//           menuItems={[createMenuItem(tasks.saveNotebook)]}
//         />
//       </IconMenu>

//     )
//   }
// }
