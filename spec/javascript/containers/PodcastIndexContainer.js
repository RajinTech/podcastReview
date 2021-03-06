import PodcastIndexContainer from '../../../app/javascript/react/containers/PodcastIndexContainer.js'
import PodcastIndexTile from '../../../app/javascript/react/components/PodcastIndexTile.js'
import fetchMock from 'fetch-mock'
import { mount } from 'enzyme'
import jasmineEnzyme from 'jasmine-enzyme'


describe('PodcastIndexContainer', () => {
  let wrapper

  beforeEach(() => {
    jasmineEnzyme()

    fetchMock.get('/api/v1/podcasts.json', {
      status: 200,
      body: [
        {
          id: 1,
          title: 'PodCat',
          creators: ['Tyler', 'Bob']
        }
      ]
    })

    wrapper = mount(
      <PodcastIndexContainer />
    );
  });

  afterEach(fetchMock.restore)

  it('should have initial state {podcasts: []}', () => {
    expect(wrapper).toHaveState('podcasts', [])
  })

  it('renders <PodcastIndexTile>s after API call', (done) => {
    setTimeout(() => {
      expect(wrapper.find('PodcastIndexTile')).toBePresent();
      done()
    }, 0)
  })

});
