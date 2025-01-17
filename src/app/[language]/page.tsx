'use client';
import React, { useState } from 'react';

import Navbar from '@/components/common/Navbar';
import SideBar from '@/components/common/Sidebar';
import AuthGuard from '@/components/misc/authGuard';
import LearnContent from '@/components/specific/LearnContent';
import LearnScreenBreadCrumb from '@/components/specific/LearnScreenBreadCrumb';
import { BreadcrumbProvider } from '@/context/BreadCrumbContext';
import { ContentProvider } from '@/context/ContentContext';
import { LanguagesProvider } from '@/context/LanguagesContext';
import { LocalStorageProvider } from '@/context/LocalhostContext';

type CourseProps = {};
type Topic = {
  name: string;
  id: string;
};

const Course: React.FC<CourseProps> = () => {
  const [currentTopic, setCurrentTopic] = useState<Topic | undefined>();
  return (
    <AuthGuard>
      <ContentProvider>
        <LocalStorageProvider>
          <BreadcrumbProvider>
            <LanguagesProvider>
              <div>
                <SideBar />
                <div className="flex min-h-screen w-full flex-col">
                  <Navbar />
                  <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
                    <div className="mx-auto grid w-full max-w-6xl gap-2">
                      <LearnScreenBreadCrumb />
                      <h1 className="text-3xl font-semibold">
                        {currentTopic?.name}
                      </h1>
                    </div>
                    <LearnContent {...{ setCurrentTopic, currentTopic }} />
                  </main>
                </div>
              </div>
            </LanguagesProvider>
          </BreadcrumbProvider>
        </LocalStorageProvider>
      </ContentProvider>
    </AuthGuard>
  );
};

export default Course;
