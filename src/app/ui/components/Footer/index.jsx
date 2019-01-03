import React, { Component } from 'react'
import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const FooterContainer = styled.div`
  border: 0;
  padding: 0.6em 1.2em;
  font-size: 12px;
  height: 32px;
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  background: transparent;
  border-top: 1px solid var(--primary-text-color);
  display: flex;
  flex-direction: row;
  justify-content: center;
`

const FooterItem = styled.a`
  text-transform: uppercase;
  padding: 0 1.2em;
  cursor: pointer;
  display: flex;
  align-items: center;
`

class Footer extends Component {
  render() { 
    const { items, onSelect } = this.props
    return (
      <FooterContainer>
        {
          items.map((item, index) => (
            <FooterItem
              onClick={() => onSelect(item)}
              key={`item-${index}`}
            >{item.split('-')[0]}</FooterItem>
          ))
        }
      </FooterContainer>
    )
  }
}

Footer.propTypes = {
  items: PropTypes.arrayOf(PropTypes.string),
  onSelect: PropTypes.func
}

export default Footer

