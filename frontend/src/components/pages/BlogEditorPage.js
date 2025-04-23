import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import Section from '../ui/Section';
import Button from '../ui/Button';
import { 
  RiImageAddLine, 
  RiH1, 
  RiH2, 
  RiBold, 
  RiItalic, 
  RiListUnordered, 
  RiListOrdered, 
  RiLinkM, 
  RiCodeSSlashLine,
  RiSave3Line,
  RiEyeLine,
  RiDeleteBin6Line,
  RiArrowGoBackLine
} from 'react-icons/ri';

const BlogEditorPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const editorRef = useRef(null);
  const [isPreview, setIsPreview] = useState(false);
  
  // Post data state
  const [post, setPost] = useState({
    title: '',
    content: '',
    excerpt: '',
    image: '',
    categories: [],
    tags: [],
    publishStatus: 'draft', // draft, published
  });
  
  // Available categories and tags
  const availableCategories = [
    'Custom Software',
    'Web Development',
    'Mobile Development',
    'AI',
    'Cloud Solutions',
    'UI/UX Design',
    'Security',
    'Technology Trends',
    'Enterprise Solutions',
  ];
  
  const [editorHeight, setEditorHeight] = useState('500px');
  const [unsavedChanges, setUnsavedChanges] = useState(false);
  
  // Set document title
  useEffect(() => {
    document.title = id ? 'Edit Article | Maabit Blog' : 'New Article | Maabit Blog';
  }, [id]);

  // Adjust editor height based on content
  useEffect(() => {
    if (editorRef.current) {
      const updateHeight = () => {
        const scrollHeight = editorRef.current.scrollHeight;
        setEditorHeight(`${Math.max(500, scrollHeight)}px`);
      };
      
      updateHeight();
      
      // Update height when window is resized
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, [post.content]);

  // Load post data if editing existing post
  useEffect(() => {
    if (id) {
      // In a real app, this would be an API call to fetch the post
      setPost({
        title: 'Sample Draft Post',
        content: 'Start writing your amazing article here...',
        excerpt: 'This is a brief summary of your article',
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
        categories: ['Web Development', 'Technology Trends'],
        tags: ['2023', 'Web Development', 'Trends'],
        publishStatus: 'draft',
      });
    }
  }, [id]);

  // Handle editor changes
  const handleContentChange = (e) => {
    setPost({
      ...post,
      content: e.target.value,
    });
    setUnsavedChanges(true);
  };

  // Handle title change
  const handleTitleChange = (e) => {
    setPost({
      ...post,
      title: e.target.value,
    });
    setUnsavedChanges(true);
  };

  // Handle excerpt change
  const handleExcerptChange = (e) => {
    setPost({
      ...post,
      excerpt: e.target.value,
    });
    setUnsavedChanges(true);
  };

  // Handle category toggle
  const handleCategoryToggle = (category) => {
    setPost(prev => {
      const newCategories = prev.categories.includes(category)
        ? prev.categories.filter(c => c !== category)
        : [...prev.categories, category];
      
      return {
        ...prev,
        categories: newCategories,
      };
    });
    setUnsavedChanges(true);
  };

  // Handle tag input
  const handleTagInput = (e) => {
    if (e.key === 'Enter' && e.target.value.trim()) {
      const newTag = e.target.value.trim();
      if (!post.tags.includes(newTag)) {
        setPost({
          ...post,
          tags: [...post.tags, newTag],
        });
        setUnsavedChanges(true);
      }
      e.target.value = '';
    }
  };

  // Remove tag
  const removeTag = (tag) => {
    setPost({
      ...post,
      tags: post.tags.filter(t => t !== tag),
    });
    setUnsavedChanges(true);
  };

  // Handle image upload
  const handleImageUpload = () => {
    // In a real app, this would open a file picker and upload the image
    const imageUrl = prompt('Enter image URL:');
    if (imageUrl) {
      setPost({
        ...post,
        image: imageUrl,
      });
      setUnsavedChanges(true);
    }
  };

  // Toggle preview mode
  const togglePreview = () => {
    setIsPreview(!isPreview);
  };

  // Save post
  const savePost = (status = post.publishStatus) => {
    // In a real app, this would send the data to an API
    const updatedPost = {
      ...post,
      publishStatus: status,
      updatedAt: new Date().toISOString(),
    };
    
    console.log('Saving post:', updatedPost);
    
    // Mock successful save
    setTimeout(() => {
      alert(`Post ${status === 'published' ? 'published' : 'saved'} successfully!`);
      setUnsavedChanges(false);
      
      if (status === 'published') {
        navigate('/blog');
      }
    }, 1000);
  };

  // Publish post
  const publishPost = () => {
    savePost('published');
  };

  // Delete post
  const deletePost = () => {
    if (window.confirm('Are you sure you want to delete this post? This action cannot be undone.')) {
      // In a real app, this would send a delete request to an API
      console.log('Deleting post:', id);
      
      // Mock successful delete
      setTimeout(() => {
        alert('Post deleted successfully!');
        navigate('/blog');
      }, 1000);
    }
  };

  // Insert formatting to editor
  const insertFormatting = (type) => {
    if (!editorRef.current) return;
    
    const editor = editorRef.current;
    const start = editor.selectionStart;
    const end = editor.selectionEnd;
    const selectedText = editor.value.substring(start, end);
    
    let formattedText = '';
    let cursorOffset = 0;
    
    switch (type) {
      case 'h1':
        formattedText = `# ${selectedText}`;
        cursorOffset = selectedText ? 0 : 2;
        break;
      case 'h2':
        formattedText = `## ${selectedText}`;
        cursorOffset = selectedText ? 0 : 3;
        break;
      case 'bold':
        formattedText = `**${selectedText}**`;
        cursorOffset = selectedText ? 0 : 2;
        break;
      case 'italic':
        formattedText = `*${selectedText}*`;
        cursorOffset = selectedText ? 0 : 1;
        break;
      case 'ul':
        formattedText = `- ${selectedText}`;
        cursorOffset = selectedText ? 0 : 2;
        break;
      case 'ol':
        formattedText = `1. ${selectedText}`;
        cursorOffset = selectedText ? 0 : 3;
        break;
      case 'link':
        const url = prompt('Enter URL:');
        if (url) {
          formattedText = `[${selectedText || 'Link text'}](${url})`;
          cursorOffset = selectedText ? 0 : 1;
        }
        break;
      case 'code':
        formattedText = `\`\`\`\n${selectedText}\n\`\`\``;
        cursorOffset = selectedText ? 0 : 4;
        break;
      case 'image':
        const imageUrl = prompt('Enter image URL:');
        if (imageUrl) {
          formattedText = `![${selectedText || 'Image description'}](${imageUrl})`;
          cursorOffset = selectedText ? 0 : 2;
        }
        break;
      default:
        return;
    }
    
    if (formattedText) {
      const newContent = 
        editor.value.substring(0, start) + 
        formattedText + 
        editor.value.substring(end);
      
      setPost({
        ...post,
        content: newContent,
      });
      
      // Set cursor position after formatting
      setTimeout(() => {
        editor.focus();
        const newCursorPosition = start + formattedText.length - cursorOffset;
        editor.setSelectionRange(newCursorPosition, newCursorPosition);
      }, 0);
      
      setUnsavedChanges(true);
    }
  };

  // Render content for preview
  const renderPreview = (content) => {
    // Basic markdown to HTML conversion
    // In a real app, use a proper markdown library
    let html = content
      .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
      .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
      .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1</a>')
      .replace(/!\[([^\]]+)\]\(([^)]+)\)/g, '<img src="$2" alt="$1" class="my-4 rounded-lg max-w-full h-auto" />')
      .replace(/^- (.*?)$/gm, '<li>$1</li>').replace(/<li>.*?<\/li>/gs, match => `<ul>${match}</ul>`)
      .replace(/^(\d+)\. (.*?)$/gm, '<li>$2</li>').replace(/<li>.*?<\/li>/gs, match => `<ol>${match}</ol>`)
      .replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/(?:\r\n|\r|\n)/g, '<br />');
    
    return <div dangerouslySetInnerHTML={{ __html: html }} />;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Section background="white" spacing="large" className="pt-32">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/blog')}
                className="flex items-center gap-1 text-dark-500 hover:text-dark-700 transition-colors"
              >
                <RiArrowGoBackLine />
                <span>Back to Blog</span>
              </button>
              <h1 className="text-2xl font-bold">{id ? 'Edit Article' : 'New Article'}</h1>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={() => savePost()}
                className="flex items-center gap-2"
              >
                <RiSave3Line />
                <span>Save Draft</span>
              </Button>
              
              <Button 
                variant="primary" 
                onClick={publishPost}
                className="flex items-center gap-2"
              >
                <span>Publish</span>
              </Button>
              
              <button
                onClick={togglePreview}
                className={`p-2 rounded-lg ${
                  isPreview 
                    ? 'bg-primary-100 text-primary-600' 
                    : 'bg-light-100 text-dark-500 hover:bg-light-200'
                } transition-colors`}
                title={isPreview ? 'Edit' : 'Preview'}
              >
                <RiEyeLine />
              </button>
              
              {id && (
                <button
                  onClick={deletePost}
                  className="p-2 rounded-lg bg-light-100 text-red-500 hover:bg-red-50 transition-colors"
                  title="Delete"
                >
                  <RiDeleteBin6Line />
                </button>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Editor */}
            <div className="lg:col-span-2">
              {/* Title */}
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Title"
                  value={post.title}
                  onChange={handleTitleChange}
                  className="w-full px-4 py-3 text-2xl font-bold border-b border-gray-200 focus:outline-none focus:border-primary-500 transition-colors bg-transparent"
                />
              </div>
              
              {/* Featured Image */}
              <div className="mb-6">
                {post.image ? (
                  <div className="relative">
                    <img 
                      src={post.image} 
                      alt="Featured" 
                      className="w-full aspect-video object-cover rounded-lg"
                    />
                    <button
                      onClick={handleImageUpload}
                      className="absolute top-4 right-4 p-2 rounded-lg bg-white/80 backdrop-blur-sm hover:bg-white transition-colors"
                      title="Change image"
                    >
                      <RiImageAddLine />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={handleImageUpload}
                    className="w-full aspect-video flex flex-col items-center justify-center border-2 border-dashed border-gray-300 rounded-lg hover:border-primary-500 transition-colors"
                  >
                    <RiImageAddLine className="text-3xl text-gray-400 mb-2" />
                    <span className="text-gray-500">Add Featured Image</span>
                  </button>
                )}
              </div>
              
              {/* Excerpt */}
              <div className="mb-6">
                <textarea
                  placeholder="Write a short excerpt for your article..."
                  value={post.excerpt}
                  onChange={handleExcerptChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                  rows="3"
                ></textarea>
              </div>
              
              {/* Formatting Toolbar */}
              <div className="flex items-center gap-1 mb-4 bg-light-50 p-2 rounded-lg">
                <button 
                  onClick={() => insertFormatting('h1')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Heading 1"
                >
                  <RiH1 />
                </button>
                <button 
                  onClick={() => insertFormatting('h2')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Heading 2"
                >
                  <RiH2 />
                </button>
                <button 
                  onClick={() => insertFormatting('bold')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Bold"
                >
                  <RiBold />
                </button>
                <button 
                  onClick={() => insertFormatting('italic')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Italic"
                >
                  <RiItalic />
                </button>
                <button 
                  onClick={() => insertFormatting('ul')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Bullet List"
                >
                  <RiListUnordered />
                </button>
                <button 
                  onClick={() => insertFormatting('ol')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Numbered List"
                >
                  <RiListOrdered />
                </button>
                <button 
                  onClick={() => insertFormatting('link')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Link"
                >
                  <RiLinkM />
                </button>
                <button 
                  onClick={() => insertFormatting('code')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Code Block"
                >
                  <RiCodeSSlashLine />
                </button>
                <button 
                  onClick={() => insertFormatting('image')}
                  className="p-2 rounded hover:bg-light-200 transition-colors"
                  title="Insert Image"
                >
                  <RiImageAddLine />
                </button>
              </div>
              
              {/* Content */}
              {isPreview ? (
                <div 
                  className="prose prose-lg max-w-none p-6 bg-white border border-gray-200 rounded-lg min-h-[500px]"
                >
                  {renderPreview(post.content)}
                </div>
              ) : (
                <textarea
                  ref={editorRef}
                  placeholder="Start writing your article here..."
                  value={post.content}
                  onChange={handleContentChange}
                  className="w-full p-6 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors font-mono"
                  style={{ minHeight: editorHeight, resize: 'none' }}
                ></textarea>
              )}
              
              {/* Save Reminder */}
              {unsavedChanges && (
                <div className="mt-4 text-right text-dark-500 text-sm">
                  <span>You have unsaved changes</span>
                </div>
              )}
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                
                <div className="space-y-2">
                  {availableCategories.map(category => (
                    <label 
                      key={category} 
                      className="flex items-center gap-2 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        checked={post.categories.includes(category)}
                        onChange={() => handleCategoryToggle(category)}
                        className="w-4 h-4 text-primary-600 rounded focus:ring-primary-500"
                      />
                      <span>{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Tags */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6">
                <h3 className="text-lg font-semibold mb-4">Tags</h3>
                
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Add tag and press Enter"
                    onKeyDown={handleTagInput}
                    className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  />
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="inline-flex items-center gap-1 px-3 py-1 bg-light-100 rounded-full text-sm"
                    >
                      {tag}
                      <button 
                        onClick={() => removeTag(tag)}
                        className="text-dark-400 hover:text-dark-600"
                      >
                        &times;
                      </button>
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Publishing Options */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-semibold mb-4">Publishing</h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Status
                    </label>
                    <select
                      value={post.publishStatus}
                      onChange={(e) => setPost({ ...post, publishStatus: e.target.value })}
                      className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    >
                      <option value="draft">Draft</option>
                      <option value="published">Published</option>
                    </select>
                  </div>
                  
                  <div className="pt-4 border-t border-gray-200 flex justify-between">
                    <Button 
                      variant="outline" 
                      onClick={() => savePost()}
                      className="flex-1 mr-2"
                    >
                      Save Draft
                    </Button>
                    
                    <Button 
                      variant="primary" 
                      onClick={publishPost}
                      className="flex-1"
                    >
                      Publish
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </motion.div>
  );
};

export default BlogEditorPage;