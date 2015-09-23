* Install nodejs and npm on your machine (brew install node / sudo apt-get install node)
* in the parent folder, run 'npm install' to install the dependencies (fs and cherrio for html manipulation)
* change few consts such as : inputDir, resultFileLocation, tocFileName to suite your needs (have a look at the example folder)
* run 'node src/index.js'
* find the result in results/result.html

It should look like this :


      <h1>Some Cool Stuff</h1>
      
      <p>file_abc</p>
          <pre class="prettyprint highlight"><code class="language-java" data-lang="java">
              foo =  goo.doIt();
          </code></pre>
      
      <h1>Some Cool Stuff</h1>
      
      <p>file_xyz</p>
          <pre class="prettyprint highlight"><code class="language-java" data-lang="java">
              foo =  goo.doIt();
          </code></pre>
      
      <h1>Some Cool Stuff</h1>
      
      <p>file_fgh</p>
          <pre class="prettyprint highlight"><code class="language-java" data-lang="java">
              foo =  goo.doIt();
          </code></pre>