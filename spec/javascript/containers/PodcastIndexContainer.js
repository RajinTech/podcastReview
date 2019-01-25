import PodcastIndexContainer from '../../../app/javascript/react/containers/PodcastIndexContainer.js'
import PodcastIndexTile from '../../../app/javascript/react/components/PodcastIndexTile.js'
import { Router } from 'react-router'
import fetchMock from 'fetch-mock'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'


describe('PodcastIndexTile', () => {
  let wrapper, podcasts
  beforeEach(() => {
    jasmineEnzyme()
    podcasts = [
      {
        id: 1,
        title: 'PodCat',
        creators: ['Tyler', 'Bob']
      }
    ]

    fetchMock.get('/api/v1/podcasts.json', {
      status: 200,
      body: podcasts
    })

    wrapper = shallow(
      <PodcastIndexContainer />
    );
    console.log(wrapper);
  });

  afterEach(fetchMock.restore)

  it('should have initial state {podcasts: []}', () => {
    expect(wrapper.state()).toEqual({ podcasts: [] })
  })

  it('renders podcast tiles after api call', (done) => {
    setTimeout(() => {
      console.log(wrapper.state()["podcasts"]);
      console.log(wrapper.filter(PodcastIndexTile).params)

      expect(wrapper.filter(PodcastIndexTile).exists()).toEqual(true)
      done()
    }, 0)
  })

});
