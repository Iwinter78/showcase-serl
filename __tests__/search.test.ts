import {searchContent} from '@/search'
import { IContent } from '@/types/content';

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

describe('Testing of searchContent. Sites search function for content', () => {
    it('Should return true if the content matches the search', () => {
        const result = searchContent(mockData[0], 'screenpipe');
        expect(result).toBe(true);
    });

    it('Should return false if the content does not match the search', () => {
        const result = searchContent(mockData[0], 'ShowcaseSERL');
        expect(result).toBe(false);
    });
});
