import { 
  Code2, 
  FileCode,
  Database,
  FileJson,
  Braces,
  Palette,
  CircuitBoard,
  Server,
  Github,
  Terminal,
  Globe,
  Cloud
} from 'lucide-react';
import { useState } from 'react';

interface Skill {
  name: string;
  icon: any;
  description: string;
  level: number;
  category: 'backend' | 'frontend' | 'tools';
}

const skills: Skill[] = [
  { 
    name: 'JAVA',
    icon: FileCode,
    description: 'Expert in Java development with strong OOP principles and design patterns',
    level: 90,
    category: 'backend'
  },
  { 
    name: 'Data Structures',
    icon: CircuitBoard,
    description: 'Proficient in implementing efficient algorithms and optimizing solutions',
    level: 85,
    category: 'backend'
  },
  { 
    name: 'Spring Boot',
    icon: FileJson,
    description: 'Building scalable microservices and RESTful APIs',
    level: 88,
    category: 'backend'
  },
  { 
    name: 'MySQL',
    icon: Database,
    description: 'Database design, optimization, and complex queries',
    level: 85,
    category: 'backend'
  },
  { 
    name: 'HTML & CSS',
    icon: Globe,
    description: 'Creating responsive and accessible web interfaces',
    level: 80,
    category: 'frontend'
  },
  { 
    name: 'JavaScript',
    icon: Braces,
    description: 'Modern ES6+ features and async programming',
    level: 75,
    category: 'frontend'
  },
  { 
    name: 'Git',
    icon: Github,
    description: 'Version control and collaborative development',
    level: 85,
    category: 'tools'
  },
  { 
    name: 'Docker',
    icon: Cloud,
    description: 'Containerization and deployment',
    level: 70,
    category: 'tools'
  },
  { 
    name: 'Linux',
    icon: Terminal,
    description: 'Shell scripting and system administration',
    level: 75,
    category: 'tools'
  },
  {
    name: 'REST APIs',
    icon: Server,
    description: 'API design and implementation',
    level: 85,
    category: 'backend'
  }
];

export function Skills() {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'backend' | 'frontend' | 'tools'>('all');
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const categories = [
    { value: 'all', label: 'All Skills' },
    { value: 'backend', label: 'Backend' },
    { value: 'frontend', label: 'Frontend' },
    { value: 'tools', label: 'Tools & DevOps' }
  ];

  const filteredSkills = selectedCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Skills</h2>
        
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category.value}
              onClick={() => setSelectedCategory(category.value as any)}
              className={`px-4 py-2 rounded-full transition-all ${
                selectedCategory === category.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-300"
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="flex items-center gap-4 mb-4">
                <skill.icon className="w-8 h-8 text-blue-600" />
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              
              <div className="mb-4">
                <div className="h-2 bg-gray-200 rounded-full">
                  <div
                    className="h-full bg-blue-600 rounded-full transition-all duration-1000"
                    style={{
                      width: hoveredSkill === skill.name ? `${skill.level}%` : '0%'
                    }}
                  />
                </div>
              </div>
              
              <p className="text-gray-600 text-sm">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}