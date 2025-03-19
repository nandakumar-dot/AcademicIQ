/**
 * Convert a roadmap chapter into a clean text format for embedding
 * @param {string} chapterName - Name of the chapter
 * @param {Array} modules - List of modules in the chapter
 * @returns {string} - Clean text representation
 */
function formatChapterForEmbedding(chapterName, modules) {
    let text = `Chapter: ${chapterName}. `;

    for (const module of modules) { 
        text += `Module: ${module.moduleName}. Description: ${module.moduleDescription}. `;
    }

    return text.trim();
}

/**
 * Process a full roadmap and extract embeddable text content
 * @param {Object} roadmap - Roadmap JSON object
 * @returns {string[]} - List of formatted text representations
 */
export function extractEmbeddableText(roadmap) {
    let formattedTexts = [`topic:${roadmap.query}`];

    for (const [chapterName, modules] of Object.entries(roadmap.chapters)) {
        formattedTexts.push(formatChapterForEmbedding(chapterName, modules));
    }

    return formattedTexts;
}

// Example JSON
// const roadmapJSON = {
//     "query": "java",
//     "chapters": {
//         "Introduction to Java": [
//             {
//                 "moduleName": "Java Basics",
//                 "moduleDescription": "Learn about the fundamentals of Java, including variables, data types, and operators.",
//                 "link": "https://en.wikipedia.org/wiki/Java_(programming_language)"
//             },
//             {
//                 "moduleName": "Control Structures",
//                 "moduleDescription": "Understand the basics of control structures in Java, such as if-else statements and loops."
//             }
//         ],
//         "Advanced Java Topics": [
//             {
//                 "moduleName": "Concurrency in Java",
//                 "moduleDescription": "Learn about concurrency in Java, including threads, locks, and synchronization."
//             },
//             {
//                 "moduleName": "Java Web Services",
//                 "moduleDescription": "Understand the basics of Java web services, including SOAP and REST, and Java APIs for web services (JAX-WS and JAX-RS)."
//             }
//         ]
//     }
// };


// Execute the function


