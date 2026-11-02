"use client";
import { LucideSearch, Menu, Moon, X } from 'lucide-react';
import React, { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    function mobileMenuClick(): void {
        setIsOpen(prev => !prev);
    }
    return (
        <nav className='bg-[var(--background)] border-b-[var(--border)] border-b-4 text-[var(--accent-foreground)] 
    '>

            {/* Desktop */}
            <div className='hidden md:flex justify-center items-center h-20'>

                <div className='flex gap-10'>
                    <div className='flex items-center'>
                        <button className='text-2xl'>
                            TaCaro
                        </button>
                    </div>

                    <div className='w-2xl  bg-[var(--muted)] rounded-md flex justify-around items-center'>
                        <div className='flex justify-between h-full w-full items-center p-2'>
                            <span className='ml-4'>
                                Busque produtos, marcas ou categorias...
                            </span>
                            <div className='mr-4'>
                                <LucideSearch />
                            </div>
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <Moon />
                    </div>
                </div>

            </div>

            {/* Mobile */}
            <div className='flex justify-center gap-1 h-15 md:hidden'>
                <button aria-label={isOpen? 'fechar menu' : 'abrir menu'} className='p-1' onClick={mobileMenuClick}>
                    {isOpen ?
                        <X /> : <Menu />
                    }
                </button>

                <div className='gap-5 flex justify-center items-center w-full'>
                    <div className='flex justify-center'>
                        <button className='text-sm'>
                            TaCaro
                        </button>
                    </div>

                    <div className='bg-[var(--muted)] w-50 rounded-md flex justify-around items-center'>
                        <div className='flex justify-between h-full w-full items-center p-2'>
                                <LucideSearch />
                        </div>
                    </div>

                    <div className='flex items-center'>
                        <Moon />
                    </div>
                </div>

            </div>

            {isOpen &&
                (<div>
                    Categorias
                </div>
                )}
        </nav>
    );
}

export default Navbar
