import PodcastShowContainer from '../../../app/javascript/react/containers/PodcastShowContainer.js'
import fetchMock from 'fetch-mock'
import { mount } from 'enzyme'
import React from 'react'
import { Link } from 'react-router'
import jasmineEnzyme from 'jasmine-enzyme'

describe('PodcastShowContainer', () => {
  let wrapper, podcast, reviews

  beforeEach(() => {
    jasmineEnzyme()

    podcast = {
      id: 1,
      title: 'PodCat',
      description: 'cool podcast',
      url: 'http://google.com',
      creators: ['Tyler', 'Bob']
    }

    reviews = [
      {
        id: 1,
        rating: 1,
        binge_val: 1,
        educational_val: 1,
        entertainment_val: 1,
        comment: "Srsly worst podcast ever"
      },
      {
        id: 2,
        rating: 5,
        binge_val: 5,
        educational_val: 5,
        entertainment_val: 5,
        comment: "Srsly best podcast ever"
      }
    ]

    fetchMock.get('/api/v1/podcasts/1', {
      status: 200,
      body: podcast
    })

    fetchMock.get('/api/v1/reviews/1', {
      status: 200,
      body: reviews
    })

    wrapper = mount(
      <PodcastShowContainer
        params={{id: 1}}
      />
    );
  });

  afterEach(fetchMock.restore)

  it('should have initial empty state', () => {
    expect(wrapper.state()).toEqual({ podcast: {}, reviews: [], creators: "" })
  })

  it('should have full state after api call', (done) => {
    setTimeout(() => {
      expect(wrapper.state()).toEqual({podcast: podcast, reviews: reviews, creators: "Tyler, Bob"})
      done()
    }, 0)
  })

  it('should render show page contents after API call', (done) => {
    setTimeout(() => {
      let expected_strings = [
        podcast.title, podcast.description, podcast.url, podcast.creators.join(', ')
      ]
      reviews.forEach((review) => {
        expected_strings = expected_strings.concat([
          review.rating,
          review.binge_val,
          review.educational_val,
          review.entertainment_val,
          review.comment
        ])
      })
      
      expected_strings.forEach((expected_str) => {
        expect(wrapper).toIncludeText(expected_str)
      })
      done()
    }, 0)
  })


});
