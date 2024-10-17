import { fetchContent } from '@/data'

jest.mock('fs', () => ({
    promises: {
      readFile: jest.fn(() => Promise.resolve(null)),
    },
  }))

describe('Testing of fetchContent', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('Should return null if file not found', async () => {
    const data = await fetchContent()
    expect(data).toBeNull()
  })
});
