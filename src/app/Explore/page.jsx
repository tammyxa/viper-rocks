import React from 'react';
import Link from "next/link";
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { options } from '../api/auth/[...nextauth]/options';


const ExplorePage = async () => {

const session = await getServerSession(options);

if (!session) {
  redirect('/api/auth/signin?callbackUrl=/Explore');
}

  return (
    <div className="explore-page-container bg-white rounded-lg shadow-lg p-6">
      <section className="task-section">
        <div className="task mb-4">
          <button className="BaseButton bg-gray-500 hover:bg-red-600 text-white font-bold py-4 px-4">
            <Link href="./Tasks/Scouting" className="text-white">
              Scout
            </Link>
          </button>
          <p className="text-subtitle text-gray-700">
            Click to begin the scouting task.
          </p>
        </div>

        <div className="task mb-4">
          <button className="BaseButton bg-gray-500 hover:bg-red-600 text-white font-bold py-4 px-4 ">
            <Link href="./Tasks/Sizing" className="text-white">
              Size
            </Link>
          </button>
          <p className="text-subtitle text-gray-700">
            Click to begin the sizing task.
          </p>
        </div>

        <div className="task">
          <button className="BaseButton bg-gray-500 hover:bg-red-600 text-white font-bold py-4 px-4">
            <Link href="./Tasks/Classifying" className="text-white">
              Classify
            </Link>
          </button>
          <p className="text-subtitle text-gray-700">
            Click to begin the classification task.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ExplorePage;