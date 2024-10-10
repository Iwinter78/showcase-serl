import { jest } from '@jest/globals';
import { fetchContent } from "@/data";
import expect from "expect";
import { IContent } from '@/types/content';

const mockData: IContent[] = [{
    id: 1,
    title: "screenpipe",
    content: "This is the content of the screenpipe project.",
    description: "24/7 local AI screen & mic recording. Build AI apps that have the full context. Works with Ollama. Alternative to Rewind.ai. Open. Secure. You own your data. Rust.",
    screenshots: ["https://screenpi.pe/1024x1024.png"],
    tags: [
      "machine-learning",
      "ai",
      "computer-vision",
      "ml",
      "vision",
      "multimodal",
      "llm"
    ],
    url: "https://github.com/mediar-ai/screenpipe",
    type: "student",
    date: "2023-10-02"
}];
jest.mock('@/data', () => ({
    fetchContent: jest.fn(() => Promise.resolve(mockData))
}));
//test('If it returns the correct data from file', async () => {
//    const mock = jest.fn<() => Promise<IContent[] | null>>().mockResolvedValue(mockData);
//
//    const data = await mock();
//    expect(data).toEqual(mockData);
//});

test('If it returns the correct data from file', async () => {
    const data = await fetchContent();
    console.log(data);
    expect(data).toEqual(mockData);
});
