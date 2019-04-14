#!/usr/bin/env node
    /*
     * Before each build, this script deletes all the generated files
     * from previous builds. That includes all generated TypeScript
     * files corresponding to SASS/LESS imports, plus the entire
     * '/public' dir.
     */

require('del').sync(['public/', 'src/**/*.d.ts']);
