# Let's Learn React
# npm install -D parcel --> for dev dependencies
# Parcel
    -Dev build
    -Local server
    -Hot module replacement
    -File watching algorithm -written in c++
    -Faster build because of caching
    -Image optimization
    -Minification
    -Bundle
    -Compress file
    -Consistent Hashing
    -Code splitting
    -Differential bundling -support older version
    -Error handling
    -HTTPS
    -Tree shaking algo - remove unused code
    -Different build for dev and and production

# package.json and package-lock.json files for dependencies installation
# remove main : App.js
# Add node_modules/.parcel-cache/dist into git ignore file


# Props to pass data to component we do it using prosps or are just arg to function

# config driven UI
   -a design pattern where the user interface structure, layout, and behavior are defined by external configuration files (usually JSON or YAML) rather than hard-coded

# we must keep key unique for each component render because
React does not re-render the whole list every time.
It uses a process called reconciliation (diffing the virtual DOM).

# What is the Virtual DOM?

The Virtual DOM is a lightweight JavaScript object that represents what the UI should look like.

# What is reconciliation? (core idea)
Creates a new Virtual DOM

Compares it with the previous Virtual DOM

Figures out the minimum changes needed

Updates only those parts in the real DOM

This comparison step is often called diffing.
Same element type (h1)

Text changed

👉 Update only the text node, not the whole page.


# named export
