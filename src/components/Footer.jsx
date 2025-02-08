import React from 'react'
import { useI18n } from '../../locales'

function Footer() {
    const t = useI18n();
    return (
        <footer className="w-full h-20 border-t border-gray-300 bg-slate-100 flex items-center justify-center">
            <div>
                <p>{t('footer')}</p>
            </div>
        </footer>
    )
}

export default Footer