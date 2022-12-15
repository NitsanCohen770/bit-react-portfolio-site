import { Project } from './project';

it('should create a project with name - React Project', () => {
  const project = new Project({
    id: '1',
    name: 'React Project',
    description: 'My first react project',
    tags: ['react', 'javascript'],
    image: 'https://bit.dev/bit/envs/compilers/react/~code',
    type: 'component-based',
    links: {}
  });
  expect(project.name).toEqual('React Project');
});

it('should create a project with id - 1', () => {
  const project = new Project({
    id: '1',
    name: 'React Project',
    description: 'My first react project',
    tags: ['react', 'javascript'],
    image: 'https://bit.dev/bit/envs/compilers/react/~code',
    links: {},
    type: 'component-based',
  });
  expect(project.id).toEqual('1');
});

it('should create a project with description - My first react project', () => {
  const project = new Project({
    id: '1',
    name: 'React Project',
    description: 'My first react project',
    tags: ['react', 'javascript'],
    image: 'https://bit.dev/bit/envs/compilers/react/~code',
    type: 'component-based',
    links: {}
  });
  expect(project.description).toEqual('My first react project');
});

it('should create a project with two tags', () => {
  const project = new Project({
    id: '1',
    name: 'React Project',
    description: 'My first react project',
    tags: ['react', 'javascript'],
    image: 'https://bit.dev/bit/envs/compilers/react/~code',
    type: 'component-based',
    links: {}
  });
  expect(project.tags.length).toBe(2);
});


it('should create a project with image', () => {
  const project = new Project({
    id: '1',
    name: 'React Project',
    description: 'My first react project',
    tags: ['react', 'javascript'],
    image: 'https://bit.dev/bit/envs/compilers/react/~code',
    type: 'component-based',
    links: {}
  });
  expect(project.image.length).toBeGreaterThan(0);
});

it('should create a project with type - component-based', () => {
  const project = new Project({
    id: '1',
    name: 'React Project',
    description: 'My first react project',
    tags: ['react', 'javascript'],
    image: 'https://bit.dev/bit/envs/compilers/react/~code',
    type: 'component-based',
    links: {}
  });
  expect(project.type).toBe('component-based');
});

