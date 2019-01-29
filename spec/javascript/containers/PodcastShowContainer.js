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

  it('should render show page contents after api call', (done) => {
    setTimeout(() => {
      let expectIncludes = (wrapper, value) => {
        expect(wrapper.text().includes(value)).toEqual(true)
      }
      expectIncludes(wrapper, podcast.title)
      expectIncludes(wrapper, podcast.description)
      expectIncludes(wrapper, podcast.url)
      expectIncludes(wrapper, podcast.creators.join(', '))
      expectIncludes(wrapper, reviews[0].rating)
      expectIncludes(wrapper, reviews[0].binge_val)
      expectIncludes(wrapper, reviews[0].educational_val)
      expectIncludes(wrapper, reviews[0].entertainment_val)
      expectIncludes(wrapper, reviews[0].comment)
      expectIncludes(wrapper, reviews[1].rating)
      expectIncludes(wrapper, reviews[1].binge_val)
      expectIncludes(wrapper, reviews[1].educational_val)
      expectIncludes(wrapper, reviews[1].entertainment_val)
      expectIncludes(wrapper, reviews[1].comment)
      done()
    }, 0)
  })


});
