import {filterContent} from '@/filter'

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

describe('Testing of filterContent', () => {
    it('Should return true if the content matches the filter', () => {
        const result = filterContent(mockData[0], 'student');
        expect(result).toBe(true);
    });

    it('Should return false if the content does not match the filter', () => {
        const result = filterContent(mockData[0], 'researcher');
        expect(result).toBe(false);
    });

    it('Should return true if the filter is empty', () => {
        const result = filterContent(mockData[0], '');
        expect(result).toBe(true);
    });

    it('Should return true if the filter is all', () => {
        const result = filterContent(mockData[0], 'all');
        expect(result).toBe(true);
    });

    test('If it breaks when inserting a boolean instead of string', () => {
        const result = filterContent(mockData[0], true);
        expect(result).toBe(false);
    });

    test('If it breaks when inserting a number instead of string', () => {
        const result = filterContent(mockData[0], 1);
        expect(result).toBe(false);
    });
})