import React, { Component } from 'react'
// import PropTypes from 'prop-types'

import Tab from './tab.component'

import styled from 'styled-components'

interface TabsState {
    activeTab: string | number;
}

interface TabsProps {
    children: JSX.Element[];
}

class Tabs extends Component<TabsProps, TabsState> {
//   static propTypes = {
//     children: PropTypes.instanceOf(Array).isRequired
//   }
  constructor (props) {
    super(props)

    this.state = {
      activeTab: this.props.children[0].props.label
    }
  }

  onClickTabItem = (tab: string | number) => {
    this.setState({ activeTab: tab })
  }

  render () {
    const {
      onClickTabItem,
      props: {
        children
      },
      state: {
        activeTab
      }
    } = this

    return (
      <StyledDiv>
        <Header className="tab-list">
          {children.map((child) => {
            const { label } = child.props

            return (
              <Tab
                key={label}
                label={label}
                onClick={onClickTabItem}
              />
            )
          })}
        </Header>
        <div className="tab-content">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined
            return child.props.children
          })}
        </div>
      </StyledDiv>
    )
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 40px;
  border-bottom: 1px solid rgb(56, 68, 77);
`

export default Tabs
