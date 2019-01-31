import ReviewFormContainer from '../../../app/javascript/react/containers/ReviewFormContainer.js'
import fetchMock from 'fetch-mock'
import { mount } from 'enzyme'
import React from 'react'
import { Link } from 'react-router'
import jasmineEnzyme from 'jasmine-enzyme'

describe('ReviewFormContainer', () => {
  let wrapper, formPayload

  beforeEach(() => {
    jasmineEnzyme()

    formPayload = {
    review: {
      user_id: 1,
      rating: 1,
      binge_val: 1,
      educational_val: 1,
      entertainment_val: 1,
      comment: "Srsly worst podcast ever",
      podcast_id: 1}
    }
    fetchMock.post('/podcast/1/reviews', {
      status: 200,
      body: formPayload
    })

    wrapper = mount(
      <ReviewFormContainer
        params={{id: 1}}
        location={{
        action: "PUSH",
        hash: "",
        key: "o0y409",
        pathname: "/podcasts/1/reviews/new",
        query: {},
        search: "",
        state: {
        title: "Evil Propoganda Machine"}
      }}
      />
    );
  });

  afterEach(fetchMock.restore)

  it('should have initial state with an empty comment box and 5 ratings for each field.', () => {
    expect(wrapper.state()).toEqual(
      {
        rating: 5,
        binge_val: 5,
        educational_val: 5,
        entertainment_val: 5,
        comment: ""
      }
    )
  })

  it('should render Review Form Fields', () => {
      let expectIncludes = (wrapper, value) => {
        expect(wrapper.text().includes(value)).toEqual(true)
      }
      expectIncludes(wrapper, "Overall Rating")
      expectIncludes(wrapper, "Bingeability")
      expectIncludes(wrapper, "Educational Value")
      expectIncludes(wrapper, "Entertainment Value")
      expectIncludes(wrapper, "Comment")
  })

});
