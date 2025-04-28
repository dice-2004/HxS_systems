"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface SystemLink {
  id: string;
  name: string;
  url: string;
  description: string;
  icon: string;
  color: string;
}

const systems: SystemLink[] = [
  {
    id: "portal",
    name: "社内ポータル",
    url: "https://portal.example.com",
    description: "日々の業務に必要な情報やニュースを確認できます",
    icon: "🏢",
    color: "bg-blue-500",
  },
  {
    id: "crm",
    name: "顧客管理システム",
    url: "https://crm.example.com",
    description: "顧客データの閲覧・更新が行えます",
    icon: "👥",
    color: "bg-green-500",
  },
  {
    id: "docs",
    name: "文書管理",
    url: "https://docs.example.com",
    description: "各種マニュアルや文書を確認できます",
    icon: "📄",
    color: "bg-amber-500",
  },
  {
    id: "analytics",
    name: "分析ダッシュボード",
    url: "https://analytics.example.com",
    description: "データ分析や指標の確認ができます",
    icon: "📊",
    color: "bg-purple-500",
  },
  {
    id: "hr",
    name: "人事システム",
    url: "https://hr.example.com",
    description: "勤怠管理や給与明細の確認ができます",
    icon: "👤",
    color: "bg-pink-500",
  },
  {
    id: "calendar",
    name: "スケジュール管理",
    url: "https://calendar.example.com",
    description: "会議や予定の確認・調整ができます",
    icon: "📅",
    color: "bg-cyan-500",
  },
];

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredSystems = systems.filter(system =>
    system.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    system.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              システムポータル
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            各システムへのアクセスを一元管理できるポータルサイトです
          </p>

          <div className="mt-8 max-w-md mx-auto">
            <input
              type="text"
              placeholder="システムを検索..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSystems.map((system, index) => (
            <motion.div
              key={system.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link
                href={system.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full"
              >
                <div className="bg-gray-800 bg-opacity-70 backdrop-blur-lg rounded-xl shadow-lg overflow-hidden h-full border border-gray-700 hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20">
                  <div className={`${system.color} h-2`}></div>
                  <div className="p-6">
                    <div className="text-4xl mb-4">{system.icon}</div>
                    <h2 className="text-xl font-bold text-white mb-2">{system.name}</h2>
                    <p className="text-gray-400 mb-6">{system.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">アクセスするにはクリック</span>
                      <span className="text-blue-400">→</span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <footer className="mt-16 text-center text-gray-500 text-sm">
          <p>© 2025 Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
