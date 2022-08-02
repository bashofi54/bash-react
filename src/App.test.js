import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(<body>
    <div>
      <div>
        <div>
          <div
            class="sidebar"
          >
            <a
              href="/"
            >
              <i
                class=" fa fa-fw fa-home"
              />
               Home
            </a>
            <a
              href="/service"
            >
              <i
                class=" fa fa-fw fa-wrench"
              />
               Services
            </a>
            <a
              href="/client"
            >
              <i
                class=" fa fa-fw fa-user"
              />
               Clients
            </a>
            <a
              href="/contact"
            >
              <i
                class=" fa fa-fw fa-envelope"
              />
               Contact
            </a>
          </div>
          <div
            class="main"
          >
            <h2>
              Home Page
            </h2>
            <ul>
              <li>
                <a
                  href="/post/1"
                >
                  satu
                </a>
              </li>
              <li>
                <a
                  href="/post/1"
                >
                  dua
                </a>
              </li>
              <li>
                <a
                  href="/post/1"
                >
                  tiga
                </a>
              </li>
            </ul>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui vel voluptatem blanditiis reprehenderit facere, nam quod perspiciatis mollitia accusamus sunt laudantium provident officiis, aperiam enim quibusdam distinctio, repellendus expedita minus?
            </p>
          </div>
        </div>
      </div>
    </div>
  </body>);
  expect(linkElement).toBeInTheDocument();
});
