import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, Plus } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [images, setImages] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // פונקציה לטיפול בקבצים שנבחרו
  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    
    const newImages: string[] = [];
    Array.from(files).forEach(file => {
      if (file.type.startsWith('image/')) {
        const url = URL.createObjectURL(file);
        newImages.push(url);
      }
    });

    setImages(prev => [...prev, ...newImages]);
  };

  // פונקציות גרירה (Drag and Drop)
  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (indexToRemove: number) => {
    setImages(prev => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 animate-fade-in-up" dir="rtl">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-[#0D245E] mb-4">הגלריה שלנו</h1>
          <p className="text-lg text-[#0D245E]">רגעים מרגשים של נתינה ושמחה</p>
        </div>

        {/* אזור העלאת תמונות */}
        <div 
          className={`
            mb-12 border-3 border-dashed rounded-3xl p-10 text-center transition-all duration-300 cursor-pointer
            ${isDragging ? 'border-[#007aff] bg-blue-50 scale-[1.02]' : 'border-gray-300 bg-white hover:border-[#007aff]/50'}
          `}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            type="file"
            ref={fileInputRef}
            className="hidden"
            multiple
            accept="image/*"
            onChange={(e) => handleFiles(e.target.files)}
          />
          
          <div className="flex flex-col items-center gap-4">
            <div className={`p-4 rounded-full ${isDragging ? 'bg-[#007aff] text-white' : 'bg-blue-100 text-[#007aff]'} transition-colors`}>
              <Upload className="w-8 h-8" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#0D245E] mb-2">העלו תמונות לגלריה</h3>
              <p className="text-[#0D245E]">
                גררו תמונות לכאן או לחצו לבחירה מהמכשיר
              </p>
            </div>
          </div>
        </div>

        {/* תצוגת התמונות (Grid) */}
        {images.length === 0 ? (
          <div className="text-center py-20 opacity-50">
            <ImageIcon className="w-16 h-16 mx-auto mb-4 text-[#0D245E]" />
            <p className="text-xl text-[#0D245E] font-medium">הגלריה עדיין ריקה... היו הראשונים להעלות תמונה!</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {images.map((src, index) => (
              <div key={index} className="group relative aspect-square bg-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all hover:scale-[1.02]">
                <img 
                  src={src} 
                  alt={`Gallery item ${index + 1}`} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(index);
                    }}
                    className="bg-white/90 p-2 rounded-full text-red-500 hover:bg-red-50 transition-colors"
                    title="מחק תמונה"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
            
            {/* כפתור הוספה קטן בתוך הגריד */}
            <button 
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center justify-center aspect-square bg-white border-2 border-dashed border-gray-300 rounded-2xl hover:border-[#007aff] hover:bg-blue-50 transition-all group"
            >
              <Plus className="w-8 h-8 text-[#0D245E] group-hover:text-[#007aff] mb-2" />
              <span className="text-sm font-medium text-[#0D245E] group-hover:text-[#007aff]">הוסף עוד</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};