import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Tweet from './Tweet'

describe('<Tweet/>', () => {
  let wrapper

  const props = {
    data: {
      text: 'This is a sample tweet',
      url: {
        url: 'http://www.twitter.com'
      },
      user: 'juancarlito88'
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Tweet {...props} />)
  })

  it('should exist', () => {
    expect(wrapper).to.exist
  })

  it('should render an <ul />', () => {
    expect(wrapper.type()).to.equal('ul')
  })

  it('should have text containing the tweet prop', () => {
    expect(wrapper.find('.tweet__text').text()).to.equal(
      'This is a sample tweet'
    )
  })

  it('should have a username containing the user prop', () => {
    expect(wrapper.find('.tweet__user').text()).to.contain('juancarlito88')
  })

  it('should have an href matching the url prop', () => {
    expect(wrapper.find('.tweet__link').prop('href')).to.equal(
      'http://www.twitter.com'
    )
  })
})
