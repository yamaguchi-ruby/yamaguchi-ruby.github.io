sudo apt install git gcc make ruby-dev libssl-dev zlib1g-dev -y

git clone https://github.com/rbenv/rbenv ~/.rbenv
mkdir -p ~/.rbenv/plugins
git clone https://github.com/rbenv/ruby-build ~/.rbenv/plugins/ruby-build

echo -e "\\nexport PATH=\"\$HOME/.rbenv/bin:\$PATH\"\\neval \"\$(rbenv init -)\"\\n" >> .bashrc
source ~/.bashrc

rbenv install 2.7.0

rbenv global 2.7.0