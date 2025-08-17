// README Forge - Dynamic README Generator

// Load all components
let SECTION_TEMPLATES = {};

// Function to load components using script tags
function loadComponents() {
  // This will be populated by the component files
  SECTION_TEMPLATES = window.COMPONENTS || {};
  console.log('Components loaded:', Object.keys(SECTION_TEMPLATES));
}

// Initialize components when the DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadComponents);
} else {
  loadComponents();
}

// React Components and Application Logic

// React Components and Application Logic
const { useState, useRef, useCallback } = React;
const { motion, AnimatePresence } = window.Motion || {};

// Utility Functions
function generateId() {
  return Math.random().toString(36).substr(2, 9);
}

function replaceUsername(content, username) {
  if (!username) return content;
  return content
    .replace(/\[YOUR_USERNAME\]/g, username)
    .replace(/\[Your Name\]/g, username)
    .replace(/yourusername/g, username.toLowerCase())
    .replace(/\$\{username\}/g, username);
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

// Main Components
function Sidebar({ onDragStart, onTouchStart, onTouchMove, onTouchEnd }) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const sidebarRef = useRef(null);
  const sections = Object.values(SECTION_TEMPLATES);
  
  const toggleMobileSidebar = () => {
    setIsMobileOpen(!isMobileOpen);
  };
  
  return React.createElement('div', {
    ref: sidebarRef,
    className: `sidebar ${isMobileOpen ? 'open' : ''} w-80 bg-dark-card border-r border-dark-border h-screen overflow-y-auto p-4`
  }, [
    React.createElement('div', {
      key: 'mobile-toggle',
      className: 'md:hidden fixed top-4 left-4 z-50'
    }, [
      React.createElement('button', {
        key: 'toggle-btn',
        onClick: toggleMobileSidebar,
        className: 'bg-neon-green text-black p-2 rounded-lg font-bold'
      }, isMobileOpen ? '✕' : '☰')
    ]),
    React.createElement('div', {
      key: 'header',
      className: 'mb-6 mt-12 md:mt-0'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-2xl font-bold text-neon-green mb-2'
      }, '🧩 Components'),
      React.createElement('p', {
        key: 'subtitle',
        className: 'text-gray-400 text-sm'
      }, 'Drag sections to the canvas to build your README')
    ]),
    React.createElement('div', {
      key: 'sections',
      className: 'space-y-3'
    }, sections.map(section => 
      React.createElement('div', {
        key: section.id,
        draggable: true,
        onDragStart: (e) => onDragStart(e, section),
        onTouchStart: (e) => onTouchStart(e, section),
        onTouchMove: onTouchMove,
        onTouchEnd: onTouchEnd,
        className: 'p-3 bg-dark-bg border border-dark-border rounded-lg cursor-move hover:border-neon-green transition-colors section-card drag-handle'
      }, [
        React.createElement('div', {
          key: 'content',
          className: 'flex items-center space-x-3'
        }, [
          React.createElement('span', {
            key: 'icon',
            className: 'text-2xl'
          }, section.icon),
          React.createElement('div', {
            key: 'info'
          }, [
            React.createElement('h3', {
              key: 'name',
              className: 'font-semibold text-white'
            }, section.name),
            React.createElement('p', {
              key: 'desc',
              className: 'text-xs text-gray-400 mt-1'
            }, `Add ${section.name.toLowerCase()} to your README`)
          ])
        ])
      ])
    ))
  ]);
}

function SectionCard({ section, onEdit, onDelete, onDragStart, index }) {
  return React.createElement(motion.div, {
    key: section.id,
    layout: true,
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    draggable: true,
    onDragStart: (e) => onDragStart(e, section, index),
    className: 'p-4 bg-dark-card border border-dark-border rounded-lg cursor-move hover:border-neon-blue transition-all section-card'
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'flex items-center justify-between mb-2'
    }, [
      React.createElement('div', {
        key: 'info',
        className: 'flex items-center space-x-2'
      }, [
        React.createElement('span', {
          key: 'icon',
          className: 'text-xl'
        }, SECTION_TEMPLATES[section.type]?.icon || '📄'),
        React.createElement('h3', {
          key: 'name',
          className: 'font-medium text-white'
        }, SECTION_TEMPLATES[section.type]?.name || 'Custom Section')
      ]),
      React.createElement('div', {
        key: 'actions',
        className: 'flex space-x-2'
      }, [
        React.createElement('button', {
          key: 'edit',
          onClick: () => onEdit(section),
          className: 'px-2 py-1 bg-neon-blue text-black rounded text-xs hover:bg-opacity-80 transition-colors'
        }, 'Edit'),
        React.createElement('button', {
          key: 'delete',
          onClick: () => onDelete(section.id),
          className: 'px-2 py-1 bg-red-500 text-white rounded text-xs hover:bg-opacity-80 transition-colors'
        }, 'Delete')
      ])
    ]),
    React.createElement('div', {
      key: 'preview',
      className: 'text-sm text-gray-400 truncate'
    }, section.content.split('\n')[0])
  ]);
}

function Canvas({ sections, onDrop, onDragOver, onEdit, onDelete, onReorder }) {
  const canvasRef = useRef(null);
  
  const handleDragStart = (e, section, index) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ section, index, source: 'canvas' }));
  };
  
  return React.createElement('div', {
    ref: canvasRef,
    onDrop: onDrop,
    onDragOver: onDragOver,
    className: 'flex-1 p-6 bg-dark-bg min-h-screen canvas canvas-drop-zone'
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'mb-6'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-2xl font-bold text-neon-green mb-2'
      }, '🎨 README Canvas'),
      React.createElement('p', {
        key: 'subtitle',
        className: 'text-gray-400'
      }, sections.length === 0 ? 'Canvas is empty! Drag sections from the sidebar to start building your README.' : `${sections.length} section(s) added`)
    ]),
    React.createElement('div', {
      key: 'sections',
      className: 'space-y-4'
    }, sections.length === 0 ? 
      React.createElement('div', {
        key: 'empty',
        className: 'border-2 border-dashed border-gray-600 rounded-lg p-12 text-center'
      }, [
        React.createElement('div', {
          key: 'icon',
          className: 'text-6xl mb-4'
        }, '📝'),
        React.createElement('h3', {
          key: 'title',
          className: 'text-xl font-medium text-gray-400 mb-2'
        }, 'Start Building Your README'),
        React.createElement('p', {
          key: 'desc',
          className: 'text-gray-500'
        }, 'Drag sections from the sidebar to create your perfect GitHub profile')
      ]) :
      React.createElement(AnimatePresence, null,
        sections.map((section, index) => 
          React.createElement(SectionCard, {
            key: section.id,
            section,
            onEdit,
            onDelete,
            onDragStart: handleDragStart,
            index
          })
        )
      )
    )
  ]);
}

function Preview({ sections }) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const previewRef = useRef(null);
  
  const generateMarkdown = () => {
    return sections.map(section => section.content).join('\n\n');
  };
  
  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };
  
  return React.createElement('div', {
    className: `${isFullscreen ? 'fullscreen' : 'w-1/2'} bg-dark-card border-l border-dark-border flex flex-col`
  }, [
    React.createElement('div', {
      key: 'header',
      className: 'p-4 border-b border-dark-border flex items-center justify-between'
    }, [
      React.createElement('h2', {
        key: 'title',
        className: 'text-xl font-bold text-neon-pink'
      }, '👁️ Live Preview'),
      React.createElement('button', {
        key: 'fullscreen',
        onClick: toggleFullscreen,
        className: 'px-3 py-1 bg-neon-pink text-black rounded text-sm hover:bg-opacity-80 transition-colors'
      }, isFullscreen ? 'Exit Fullscreen' : 'Fullscreen')
    ]),
    React.createElement('div', {
      key: 'content',
      ref: previewRef,
      className: 'flex-1 overflow-y-auto p-4 github-markdown preview-content',
      dangerouslySetInnerHTML: {
        __html: marked.parse(generateMarkdown())
      }
    })
  ]);
}

function EditModal({ section, onSave, onClose }) {
  const [content, setContent] = useState(section?.content || '');
  
  const handleSave = () => {
    onSave({ ...section, content });
    onClose();
  };
  
  if (!section) return null;
  
  return React.createElement('div', {
    className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
  }, [
    React.createElement(motion.div, {
      key: 'modal',
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      className: 'bg-dark-card border border-dark-border rounded-lg p-6 w-full max-w-4xl max-h-[80vh] overflow-y-auto'
    }, [
      React.createElement('div', {
        key: 'header',
        className: 'flex items-center justify-between mb-4'
      }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-xl font-bold text-neon-green'
        }, `Edit ${SECTION_TEMPLATES[section.type]?.name || 'Section'}`),
        React.createElement('button', {
          key: 'close',
          onClick: onClose,
          className: 'text-gray-400 hover:text-white'
        }, '✕')
      ]),
      React.createElement('textarea', {
        key: 'editor',
        value: content,
        onChange: (e) => setContent(e.target.value),
        className: 'w-full h-96 code-editor',
        placeholder: 'Enter your markdown content here...'
      }),
      React.createElement('div', {
        key: 'actions',
        className: 'flex justify-end space-x-3 mt-4'
      }, [
        React.createElement('button', {
          key: 'cancel',
          onClick: onClose,
          className: 'px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors'
        }, 'Cancel'),
        React.createElement('button', {
          key: 'save',
          onClick: handleSave,
          className: 'px-4 py-2 bg-neon-green text-black rounded hover:bg-opacity-80 transition-colors'
        }, 'Save Changes')
      ])
    ])
  ]);
}

function Toolbar({ onImport, onExport, onClear, sections, showUsernameButton, githubUsername, openUsernameModal }) {
  const fileInputRef = useRef(null);
  
  const handleImport = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const content = e.target.result;
          onImport(content);
          showToast('README imported successfully!');
        } catch (error) {
          showToast('Error importing file', 'error');
        }
      };
      reader.readAsText(file);
    }
  };
  
  const handleExport = () => {
    const markdown = sections.map(section => section.content).join('\n\n');
    const blob = new Blob([markdown], { type: 'text/markdown' });
    saveAs(blob, 'README.md');
    showToast('README exported successfully!');
  };
  
  const handleCopy = () => {
    const markdown = sections.map(section => section.content).join('\n\n');
    navigator.clipboard.writeText(markdown).then(() => {
      showToast('README copied to clipboard!');
    });
  };
  
  return React.createElement('div', {
    className: 'bg-dark-card border-b border-dark-border p-4'
  }, [
    React.createElement('div', {
      key: 'content',
      className: 'flex items-center justify-between'
    }, [
      React.createElement('div', {
        key: 'left',
        className: 'flex items-center space-x-4'
      }, [
        React.createElement('h1', {
          key: 'title',
          className: 'text-2xl font-bold text-neon-green'
        }, '🚀 GitHub README Generator'),
        showUsernameButton && React.createElement('button', {
          key: 'username',
          onClick: openUsernameModal,
          className: 'px-3 py-1 bg-neon-blue text-black rounded text-sm hover:bg-opacity-80 transition-all transform hover:scale-105'
        }, githubUsername ? `👤 ${githubUsername}` : '👤 Set Username')
      ]),
      React.createElement('div', {
        key: 'actions',
        className: 'flex items-center space-x-3'
      }, [
        React.createElement('input', {
          key: 'file-input',
          ref: fileInputRef,
          type: 'file',
          accept: '.md,.txt',
          onChange: handleImport,
          className: 'hidden'
        }),
        React.createElement('button', {
          key: 'import',
          onClick: () => fileInputRef.current?.click(),
          className: 'px-4 py-2 bg-neon-blue text-black rounded hover:bg-opacity-80 transition-colors btn-secondary'
        }, '📁 Import'),
        React.createElement('button', {
          key: 'copy',
          onClick: handleCopy,
          disabled: sections.length === 0,
          className: 'px-4 py-2 bg-neon-pink text-black rounded hover:bg-opacity-80 transition-colors disabled:opacity-50 btn-primary'
        }, '📋 Copy'),
        React.createElement('button', {
          key: 'export',
          onClick: handleExport,
          disabled: sections.length === 0,
          className: 'px-4 py-2 bg-neon-green text-black rounded hover:bg-opacity-80 transition-colors disabled:opacity-50 btn-primary'
        }, '💾 Download'),
        React.createElement('button', {
          key: 'clear',
          onClick: onClear,
          disabled: sections.length === 0,
          className: 'px-4 py-2 bg-red-500 text-white rounded hover:bg-opacity-80 transition-colors disabled:opacity-50'
        }, '🗑️ Clear'),
        React.createElement('a', {
          key: 'contribute',
          href: 'https://github.com/GarvitOfficial/readmeForge',
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition-colors'
        }, '🤝 Contribute')
      ])
    ])
  ]);
}

function UsernameModal({ isOpen, onSave, onSkip }) {
  const [username, setUsername] = useState('');
  
  const handleSave = () => {
    if (username.trim()) {
      onSave(username.trim());
      showToast(`Username set to: ${username.trim()}`);
    }
  };
  
  if (!isOpen) return null;
  
  return React.createElement('div', {
    className: 'fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50'
  }, [
    React.createElement(motion.div, {
      key: 'modal',
      initial: { opacity: 0, scale: 0.9 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.9 },
      className: 'bg-dark-card border border-neon-green rounded-lg p-6 w-full max-w-md'
    }, [
      React.createElement('div', {
        key: 'header',
        className: 'text-center mb-6'
      }, [
        React.createElement('h2', {
          key: 'title',
          className: 'text-2xl font-bold text-neon-green mb-2'
        }, '👤 Set Your GitHub Username'),
        React.createElement('p', {
          key: 'desc',
          className: 'text-gray-400'
        }, 'This will automatically replace [YOUR_USERNAME] in all templates')
      ]),
      React.createElement('input', {
        key: 'input',
        type: 'text',
        value: username,
        onChange: (e) => setUsername(e.target.value),
        placeholder: 'Enter your GitHub username',
        className: 'w-full p-3 bg-dark-bg border border-dark-border rounded text-white placeholder-gray-400 focus:border-neon-green focus:outline-none',
        onKeyPress: (e) => e.key === 'Enter' && handleSave()
      }),
      React.createElement('div', {
        key: 'actions',
        className: 'flex space-x-3 mt-6'
      }, [
        React.createElement('button', {
          key: 'skip',
          onClick: onSkip,
          className: 'flex-1 px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors'
        }, 'Skip for now'),
        React.createElement('button', {
          key: 'save',
          onClick: handleSave,
          className: 'flex-1 px-4 py-2 bg-neon-green text-black rounded hover:bg-opacity-80 transition-colors'
        }, 'Save Username')
      ])
    ])
  ]);
}

// Main Application Component
function App() {
  const [sections, setSections] = useState([]);
  const [editingSection, setEditingSection] = useState(null);
  const [showUsernameModal, setShowUsernameModal] = useState(false);
  const [githubUsername, setGithubUsername] = useState('');
  const [showUsernameButton] = useState(true);
  
  const handleDragStart = (e, section) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ section, source: 'sidebar' }));
  };
  
  // Touch event handlers for mobile drag-and-drop
  const handleTouchStart = (e, section) => {
    const touch = e.touches[0];
    const dragData = { section, source: 'sidebar' };
    
    // Store drag data for touch events
    e.target.setAttribute('data-drag-info', JSON.stringify(dragData));
    
    // Visual feedback for touch drag
    e.target.style.opacity = '0.7';
    e.target.style.transform = 'scale(1.05)';
  };
  
  const handleTouchMove = (e) => {
    e.preventDefault(); // Prevent scrolling while dragging
  };
  
  const handleTouchEnd = (e) => {
    const touch = e.changedTouches[0];
    const elementBelow = document.elementFromPoint(touch.clientX, touch.clientY);
    
    // Reset visual feedback
    e.target.style.opacity = '1';
    e.target.style.transform = 'scale(1)';
    
    // Check if dropped on canvas
    const canvas = elementBelow?.closest('.canvas-drop-zone');
    if (canvas && e.target.hasAttribute('data-drag-info')) {
      const dragData = JSON.parse(e.target.getAttribute('data-drag-info'));
      
      // Simulate drop event
      const mockEvent = {
        preventDefault: () => {},
        dataTransfer: {
          getData: () => JSON.stringify(dragData)
        }
      };
      
      handleDrop(mockEvent);
    }
    
    // Clean up
    e.target.removeAttribute('data-drag-info');
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData('text/plain'));
    
    if (data.source === 'sidebar') {
      const newSection = {
        id: generateId(),
        type: data.section.id,
        content: replaceUsername(data.section.template, githubUsername)
      };
      setSections(prev => [...prev, newSection]);
      showToast(`${data.section.name} added to canvas!`);
    } else if (data.source === 'canvas') {
      // Handle reordering within canvas
      const draggedSection = sections[data.index];
      const newSections = sections.filter((_, index) => index !== data.index);
      
      // Find drop position
      const dropIndex = sections.length - 1;
      newSections.splice(dropIndex, 0, draggedSection);
      setSections(newSections);
    }
  };
  
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  
  const handleEdit = (section) => {
    setEditingSection(section);
  };
  
  const handleSave = (updatedSection) => {
    setSections(prev => prev.map(section => 
      section.id === updatedSection.id ? updatedSection : section
    ));
    showToast('Section updated successfully!');
  };
  
  const handleDelete = (sectionId) => {
    setSections(prev => prev.filter(section => section.id !== sectionId));
    showToast('Section removed from canvas');
  };
  
  const handleClear = () => {
    if (window.confirm('Are you sure you want to clear all sections?')) {
      setSections([]);
      showToast('Canvas cleared');
    }
  };
  
  const handleImport = (content) => {
    const newSection = {
      id: generateId(),
      type: 'imported',
      content: replaceUsername(content, githubUsername)
    };
    setSections(prev => [...prev, newSection]);
  };
  
  const openUsernameModal = () => {
    setShowUsernameModal(true);
  };
  
  const handleUsernameSave = (username) => {
    setGithubUsername(username);
    setShowUsernameModal(false);
    
    // Update existing sections with new username
    setSections(prev => prev.map(section => ({
      ...section,
      content: replaceUsername(
        SECTION_TEMPLATES[section.type]?.template || section.content,
        username
      )
    })));
  };
  
  const handleUsernameSkip = () => {
    setShowUsernameModal(false);
  };
  
  return React.createElement('div', {
    className: 'min-h-screen bg-dark-bg text-white'
  }, [
    React.createElement(Toolbar, {
      key: 'toolbar',
      onImport: handleImport,
      onExport: () => {},
      onClear: handleClear,
      sections,
      showUsernameButton,
      githubUsername,
      openUsernameModal
    }),
    React.createElement('div', {
      key: 'main',
      className: 'flex h-screen'
    }, [
      React.createElement(Sidebar, {
        key: 'sidebar',
        onDragStart: handleDragStart,
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd
      }),
      React.createElement(Canvas, {
        key: 'canvas',
        sections,
        onDrop: handleDrop,
        onDragOver: handleDragOver,
        onEdit: handleEdit,
        onDelete: handleDelete
      }),
      React.createElement(Preview, {
        key: 'preview',
        sections
      })
    ]),
    React.createElement(AnimatePresence, {
      key: 'modals'
    }, [
      editingSection && React.createElement(EditModal, {
        key: 'edit-modal',
        section: editingSection,
        onSave: handleSave,
        onClose: () => setEditingSection(null)
      }),
      showUsernameModal && React.createElement(UsernameModal, {
        key: 'username-modal',
        isOpen: showUsernameModal,
        onSave: handleUsernameSave,
        onSkip: handleUsernameSkip
      })
    ]),
   
  ]);
}

// Initialize Application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));