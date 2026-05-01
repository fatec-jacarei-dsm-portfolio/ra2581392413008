/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from "./components/Hero";
import ProjectGallery from "./components/ProjectGallery";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <ProjectGallery />
      </main>

      <Footer />
    </div>
  );
}
