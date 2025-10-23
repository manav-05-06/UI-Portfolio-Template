import { useState } from "react";

export default function About() {
  const [activeTab, setActiveTab] = useState("about");

  const tabs = [
    { id: "about", label: "About Me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  const content = {
    about: `Hello! I’m Manav, a passionate and motivated professional with a strong interest in technology and problem-solving. 
I have been honing my skills in web development and programming, and I love creating projects that are both functional and visually appealing. 
I was born and raised in jaipur, and I enjoy exploring new ideas, learning continuously, and sharing knowledge with others. 
Outside of coding, I enjoy gaming, experimenting with design concepts, and collaborating on projects that challenge me creatively. 
I hope people remember me as someone who is curious, hardworking, and approachable.
`,
    
    experiences: `I have gained hands-on experience in web development, particularly in HTML, CSS, JavaScript, and React.js. 
I have worked on several projects, including interactive games, responsive websites, and dynamic UI components. 
Through these experiences, I have developed problem-solving skills, attention to detail, and the ability to work effectively in a team. 
I have also explored data structures and algorithms, preparing myself for complex coding challenges and interviews, and continuously learning to improve my technical expertise.
`,
    
    recommended: `Colleagues and peers often describe me as dedicated, reliable, and collaborative. 
I am recognized for my creativity, consistency, and willingness to go the extra mile to ensure project success. 
People remember me for my enthusiasm for learning, ability to find efficient solutions, and positive approach to challenges. 
I strive to leave a lasting impression by being helpful, approachable, and passionate about my work.
`,
  };

  return (
    <div className="font-mono bg-[#1C1C21] text-white rounded-[20px] shadow-[0_4px_30px_rgba(0,0,0,0.4)] p-6 w-[420px] border border-[#2A2A32]">
      <div className="flex justify-between mb-5 bg-[#2A2A32] rounded-[14px] p-[6px]">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 rounded-[12px] text-sm font-medium capitalize transition-all duration-200 ${
              activeTab === tab.id
                ? "bg-[#3D3D45] text-white shadow-inner"
                : "text-gray-400 hover:bg-[#35353C]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="h-40 font-mono overflow-y-auto text-[13px] leading-relaxed pr-2 text-gray-200 scrollbar-thin scrollbar-thumb-[#3D3D45]">
        {content[activeTab]}
      </div>
    </div>
  );
}
