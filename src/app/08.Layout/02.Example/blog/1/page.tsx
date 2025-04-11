import BlogLayout from "../layout";

const BlogPost = () => {
  return (
    <BlogLayout title="The Magic of Studio Ghibli">
      <article className="prose prose-emerald max-w-none">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">
              Animation
            </span>
            <span className="text-sm text-emerald-500">
              June 15, 2024 • 5 min read
            </span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-serif text-emerald-800 mb-4">
            The Magic of Studio Ghibli
          </h1>
          
          <div className="w-full h-64 bg-emerald-100 rounded-lg flex items-center justify-center mb-6">
            <span className="text-4xl text-emerald-600">✧</span>
          </div>
        </div>
        
        <p className="lead text-lg text-emerald-700 mb-6">
          Studio Ghibli has captivated audiences worldwide with its enchanting storytelling, 
          breathtaking visuals, and deeply resonant themes. In this exploration, we'll dive 
          into what makes Ghibli's animation style so unique and influential.
        </p>
        
        <h2 className="text-2xl font-serif text-emerald-800 mt-8 mb-4">
          The Essence of Ghibli's Art Style
        </h2>
        
        <p>
          At the heart of Studio Ghibli's distinctive style lies a profound respect for 
          nature and a commitment to hand-drawn animation. Unlike many modern animated films 
          that rely heavily on computer-generated imagery, Ghibli films maintain a tangible, 
          organic quality that feels alive and breathing.
        </p>
        
        <p>
          The studio's artists employ a meticulous attention to detail, creating rich, 
          layered backgrounds that invite viewers to lose themselves in the world of the film. 
          From the gentle sway of grass in the wind to the intricate patterns of light filtering 
          through leaves, every frame is crafted with care and intention.
        </p>
        
        <h2 className="text-2xl font-serif text-emerald-800 mt-8 mb-4">
          Color and Light
        </h2>
        
        <p>
          Ghibli's color palette is another defining characteristic of their style. The studio 
          uses a rich, vibrant spectrum that feels both natural and magical. Greens are 
          particularly prominent, reflecting the studio's environmental themes and love for 
          nature.
        </p>
        
        <p>
          Light plays a crucial role in Ghibli films, often becoming a character in itself. 
          Whether it's the golden glow of sunset, the cool blue of moonlight, or the dappled 
          light of a forest, the way light is rendered adds depth and emotion to every scene.
        </p>
        
        <h2 className="text-2xl font-serif text-emerald-800 mt-8 mb-4">
          Character Design
        </h2>
        
        <p>
          Ghibli characters are instantly recognizable for their expressive faces and natural, 
          flowing movements. Unlike the exaggerated features common in Western animation, 
          Ghibli characters often have more realistic proportions, with large, expressive eyes 
          being a notable exception.
        </p>
        
        <p>
          The studio's approach to character animation emphasizes subtlety and nuance. A slight 
          change in expression or a small gesture can convey volumes, creating characters that 
          feel fully realized and emotionally complex.
        </p>
        
        <h2 className="text-2xl font-serif text-emerald-800 mt-8 mb-4">
          The Legacy of Ghibli
        </h2>
        
        <p>
          Studio Ghibli's influence extends far beyond animation. Their films have inspired 
          countless artists, filmmakers, and storytellers across various mediums. The studio's 
          commitment to quality, their respect for their audience, and their willingness to 
          tackle complex themes have set a standard for what animation can achieve.
        </p>
        
        <p>
          As we look to the future of animation, the lessons of Studio Ghibli remain relevant: 
          the importance of craftsmanship, the power of storytelling, and the magic that can 
          be created when artists pour their hearts into their work.
        </p>
        
        <div className="mt-12 p-6 bg-emerald-50 rounded-lg border border-emerald-100">
          <h3 className="text-xl font-serif text-emerald-800 mb-3">About the Author</h3>
          <div className="flex items-center">
            <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center mr-4">
              <span className="text-xl text-emerald-600">✧</span>
            </div>
            <div>
              <h4 className="font-medium text-emerald-800">Storyteller</h4>
              <p className="text-sm text-emerald-600">Animation enthusiast and Ghibli fan</p>
            </div>
          </div>
        </div>
      </article>
    </BlogLayout>
  );
};

export default BlogPost;