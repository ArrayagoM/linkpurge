// La función cleanURL debe estar disponible desde src/js/cleaner.js

document.addEventListener('DOMContentLoaded', () => {
    // Definición de idioma (para la versión en inglés, cambie el valor en el HTML)
    const isSpanish = document.documentElement.lang === 'es';

    const MESSAGES = {
        'es': {
            errorInvalid: 'Asegúrate de que has pegado un URL válido.',
            success: '¡Enlace purificado con éxito! ✨',
            copyBtn: 'Copiar',
            copied: '¡Copiado! ✅',
            noRemovedMsg: '¡No se detectó ningún parámetro de seguimiento! El enlace ya estaba limpio.'
        },
        'en': {
            errorInvalid: 'Please ensure you have pasted a valid URL.',
            success: 'Link successfully purified! ✨',
            copyBtn: 'Copy',
            copied: 'Copied! ✅',
            noRemovedMsg: 'No tracking parameters were detected! The link was already clean.'
        }
    };
    
    const LANG = isSpanish ? MESSAGES.es : MESSAGES.en;

    // --- Elementos DOM (Corregidos para evitar 'null') ---
    const urlInput = document.getElementById('urlInput');
    const cleanButton = document.getElementById('cleanButton');
    const resultSection = document.getElementById('result-section');
    const message = document.getElementById('message');
    const copyButton = document.getElementById('copyButton');
    
    // Elementos del Reporte
    const analysisSection = document.getElementById('analysis-section');
    const originalUrlDisplay = document.getElementById('originalUrlDisplay');
    // Este es el INPUT donde se puede copiar la URL limpia
    const cleanedUrlDisplay = document.getElementById('resultUrl'); 
    // Este es el CODE que se usa en el reporte visual
    const cleanedUrlReportDisplay = document.getElementById('cleanedUrlReportDisplay'); 
    const removedParamsList = document.getElementById('removedParamsList');
    const removedCount = document.getElementById('removedCount');
    const noRemovedMessage = document.getElementById('noRemovedMessage');

    // Comprobación de existencia para extrema robustez (opcional en producción limpia, pero útil en desarrollo)
    if (!urlInput || !cleanButton || !cleanedUrlDisplay) {
        console.error("ERROR CRÍTICO: No se encontraron todos los elementos DOM necesarios. Revise los IDs en el HTML.");
        return; // Detiene la ejecución si los elementos clave faltan
    }

    urlInput.focus();

    cleanButton.addEventListener('click', () => {
        const urlString = urlInput.value.trim();
        
        // Resetear UI
        cleanButton.classList.add('button-loading');
        resultSection.classList.add('hidden');
        analysisSection.classList.add('hidden');
        message.textContent = '';
        message.className = '';

        setTimeout(() => {
            const results = cleanURL(urlString); // Obtiene el objeto de resultados desde cleaner.js

            if (results.error) {
                // Manejo de Error
                message.textContent = LANG.errorInvalid;
                message.classList.add('error');
            } else {
                // Manejo de Éxito
                
                // 1. Mostrar URL limpia en el INPUT principal (para copiar)
                cleanedUrlDisplay.value = results.cleanedUrl;
                
                // 2. Mostrar URL limpia en el CODE del reporte
                cleanedUrlReportDisplay.textContent = results.cleanedUrl;
                
                resultSection.classList.remove('hidden');
                message.textContent = LANG.success;
                message.classList.add('success');

                // 3. Generar el Reporte de Análisis
                renderAnalysisReport(results);
            }

            cleanButton.classList.remove('button-loading');
        }, 500);
    });

    function renderAnalysisReport(results) {
        analysisSection.classList.remove('hidden');
        originalUrlDisplay.textContent = results.originalUrl;
        
        removedParamsList.innerHTML = '';
        noRemovedMessage.classList.add('hidden');

        if (results.removedParams.length > 0) {
            removedCount.textContent = results.removedParams.length;
            results.removedParams.forEach(param => {
                const li = document.createElement('li');
                li.textContent = param;
                removedParamsList.appendChild(li);
            });
        } else {
            removedCount.textContent = 0;
            noRemovedMessage.textContent = LANG.noRemovedMsg;
            noRemovedMessage.classList.remove('hidden');
        }
    }

    // --- Lógica de Copiado ---
    copyButton.addEventListener('click', () => {
        navigator.clipboard.writeText(cleanedUrlDisplay.value).then(() => {
            copyButton.textContent = LANG.copied;
            copyButton.classList.add('copied');
            setTimeout(() => {
                copyButton.textContent = LANG.copyBtn;
                copyButton.classList.remove('copied');
            }, 1500);
        }).catch(err => {
            // Fallback (solo si la API de Clipboard falla)
            cleanedUrlDisplay.select();
            document.execCommand('copy');
            alert(LANG.copied);
        });
    });

    urlInput.addEventListener('paste', () => {
        setTimeout(() => {
            cleanButton.click();
        }, 10);
    });
});