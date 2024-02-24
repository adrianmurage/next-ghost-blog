import Link from 'next/link';

export default async function Page() {
  return (
    <>
      <main className="mt-6">
        <div className="mx-auto prose prose-h2:mb-2.5 prose-a:underline-offset-4	prose-a:text-blue-500">
          <h1>My work in the Technical Writing space</h1>
          <p className="">
            If you would like to discuss content for your business, please
            contact me at{' '}
            <Link href="mailto:adrianmurage21@gmail.com">
              adrianmurage21@gmail.com
            </Link>
          </p>
          <h2>Articles I have written</h2>
          <table className="table table-condensed table-bordered">
            <thead>
              <tr>
                <th>Publication</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>HackerNoon</td>
                <td>
                  <Link
                    href="https://hackernoon.com/how-to-get-started-with-writing-online"
                    target="_blank"
                  >
                    How to Get Started with Writing Online
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Section.io</td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/javascript-and-web-apis/"
                    target="_blank"
                  >
                    How JavaScript Uses Web Browser APIs to Achieve
                    Asynchronisity
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Section.io</td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/js-execution-under-the-hood/"
                    target="_blank"
                  >
                    What Happens When JavaScript Runs My Code?
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Section.io</td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/building-a-basic-api-with-nodejs/"
                    target="_blank"
                  >
                    How To Build and Test a Node.js REST API with Express on
                    Ubuntu 18.04
                  </Link>
                </td>
              </tr>
              <tr>
                <td>Section.io</td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/setup-ssh-ubuntu-vm-aws/"
                    target="_blank"
                  >
                    How To Setup and SSH into an Ubuntu 18.04 Virtual Machine on
                    AWS
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>Articles that I edited, written by other authors.</h2>
          <p>
            I have edited quite a number of articles for the{' '}
            <Link
              href="https://www.section.io/engineering-education"
              target="_blank"
            >
              {' '}
              Section.io Engineering Education publication
            </Link>
            , so I can't include all of them here.
          </p>
          <p>
            The list below shows a few of them. For the full list, you can check
            out{' '}
            <Link
              href="https://www.google.com/search?q=site:section.io+peer+review+contributions+by:+Adrian+murage&ei=0aw6ZJGYENeCkdUPxamg8A8&start=30&sa=N&ved=2ahUKEwjRxPD7hKz-AhVXQaQEHcUUCP44KBDy0wN6BAgGEAo&biw=1316&bih=636&dpr=1"
              target="_blank"
            >
              this google query
            </Link>
          </p>
          <table className="table table-condensed table-bordered">
            <thead>
              <tr>
                <th>Author</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/adetu-ridwan/"
                    target="_blank"
                  >
                    Adetu Ridwan
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/how-to-create-a-blockchain-in-python/"
                    target="_blank"
                  >
                    How to Create a Simple Blockchain using Python
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/anita-achu/"
                    target="_blank"
                  >
                    Anita Achu
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/concurrency-in-go/"
                    target="_blank"
                  >
                    Concurrency in Go
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/paul-mwangi/"
                    target="_blank"
                  >
                    Paul Mwangi
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/transaction-management-in-database/"
                    target="_blank"
                  >
                    Transaction management in a database
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/priya-kalyanakrishnan/"
                    target="_blank"
                  >
                    Priya Kalyanakrishnan
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/securing-data-with-h2o/"
                    target="_blank"
                  >
                    Securing Data with H2o
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/lucy-maina/"
                    target="_blank"
                  >
                    Lucy Maina
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/getting-started-with-css/"
                    target="_blank"
                  >
                    Getting Started with CSS
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/onesmus-mbaabu/"
                    target="_blank"
                  >
                    Onesmus Mbaabu
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/understanding-software-development-life-cycle/"
                    target="_blank"
                  >
                    Understanding the Software Development Life Cycle
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/judy-nduati/"
                    target="_blank"
                  >
                    Judy Nduati
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/the-overview-of-a-database-life-cycle/"
                    target="_blank"
                  >
                    The Overview of a Database Life Cycle
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/lalithnarayan-c/"
                    target="_blank"
                  >
                    Lalithnarayan C
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/nlp-transfer-learning/"
                    target="_blank"
                  >
                    Introduction to Transfer Learning in NLP
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/adetu-ridwan/"
                    target="_blank"
                  >
                    Adetu Ridwan
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/complete-guide-on-installing-flask-for-beginners/"
                    target="_blank"
                  >
                    A Complete Guide on Installing Flask for Beginners
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/onesmus-mbaabu/"
                    target="_blank"
                  >
                    Onesmus Mbaabu
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/intelligent-agents-in-ai/"
                    target="_blank"
                  >
                    Intelligent Agents in Artificial Intelligence
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/quadri-sheriff/"
                    target="_blank"
                  >
                    Quadri Sheriff
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/software-testing-part2/"
                    target="_blank"
                  >
                    Introduction to Test-Driven Development
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/quadri-sheriff/"
                    target="_blank"
                  >
                    Quadri Sheriff
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/software-testing-part1/"
                    target="_blank"
                  >
                    Introduction to Unit Testing
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/lalithnarayan-c/"
                    target="_blank"
                  >
                    Lalithnarayan C
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/word-cloud/"
                    target="_blank"
                  >
                    Creating Word Clouds in Python
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/lalithnarayan-c/"
                    target="_blank"
                  >
                    Lalithnarayan C
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/linear-discriminant-analysis/"
                    target="_blank"
                  >
                    Linear Discriminant Analysis from Scratch
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/authors/lalithnarayan-c/"
                    target="_blank"
                  >
                    Lalithnarayan C
                  </Link>
                </td>
                <td>
                  <Link
                    href="https://www.section.io/engineering-education/house-price-prediction/"
                    target="_blank"
                  >
                    House Price Prediction using Machine Learning
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
