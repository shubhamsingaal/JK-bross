import React from 'react'

const SignUp = () => {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Section 1 */}
      <div className="md:w-1/2 bg-blue-500 p-8 text-white h-full">
        <h2 className="text-2xl font-bold mb-4">Section 1</h2>
        <p>
          This is the first section of the page. You can add your content here.
        </p>
      </div>

      {/* Section 2 */}
      <div className="md:w-1/2 bg-gray-200 p-8 h-full">
        <h2 className="text-2xl font-bold mb-4">Section 2</h2>
        <p>
          This is the second section of the page. You can add more content here.
        </p>
      </div>
    </div>

  )
}

export default SignUp