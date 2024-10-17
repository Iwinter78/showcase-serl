import { IContent } from '@/types/content'
import { fetchContent } from '@/data'
import exp from 'constants';

const mockData: IContent[] = [
  {
    id: 1,
    title: 'screenpipe',
    description:
      '24/7 local AI screen & mic recording. Build AI apps that have the full context. Works with Ollama. Alternative to Rewind.ai. Open. Secure. You own your data. Rust.',
    screenshots: ['https://screenpi.pe/1024x1024.png'],
    tags: [
      'machine-learning',
      'ai',
      'computer-vision',
      'ml',
      'vision',
      'multimodal',
      'llm',
    ],
    url: 'https://github.com/mediar-ai/screenpipe',
    type: 'student',
    date: '2023-10-02',
  },
];

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(() => Promise.resolve(JSON.stringify(mockData))),
  },
}))

describe('Testing of fetchContent', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return the correct data from file', async () => {
    const data = await fetchContent();
    expect(data).toEqual(mockData);
    expect(data).toHaveLength(1);
  })

  it('Should return the correct data from file', async () => {
    const data = await fetchContent();
    expect(data).toEqual(mockData);
    expect(data).toHaveLength(1);
    expect(data?.[0]).toBeDefined();
    expect(data?.[0].id).not.toBeNull();
    expect(data?.[0].id).toBe(1);
    expect(data?.[0].title).toBe('screenpipe');
    expect(data?.[0].description).toBe(
      '24/7 local AI screen & mic recording. Build AI apps that have the full context. Works with Ollama. Alternative to Rewind.ai. Open. Secure. You own your data. Rust.'
    );
    expect(data?.[0].screenshots).toEqual([
      'https://screenpi.pe/1024x1024.png',
    ]);
    expect(data?.[0].tags).toEqual([
      'machine-learning',
      'ai',
      'computer-vision',
      'ml',
      'vision',
      'multimodal',
      'llm',
    ]);
    expect(data?.[0].url).toBe('https://github.com/mediar-ai/screenpipe');
    expect(data?.[0].type).toBe('student');
    expect(data?.[0].date).toBe('2023-10-02');
  });
})
