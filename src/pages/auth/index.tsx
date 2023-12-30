import Navbar from '@/src/components/Navbar/Navbar';
import AuthModal from '@/src/components/modals/AuthModal';
import React from 'react';

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    
    return <div className='bg-gradient-to-b from-gray-600 to-black h-screen relative'>
        <div className='max-w-7xl mx-auto'>
            <Navbar/>
            <div className='flex items-center justify-content h-[calc(100vh-5rem)] pointer-eventer-none select-none'>
                    
            </div>
            <AuthModal/>
        </div>
    </div>
}
export default AuthPage;