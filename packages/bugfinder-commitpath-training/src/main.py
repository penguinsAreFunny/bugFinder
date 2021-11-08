# generete python evironment: python -m venv env
# active env: env\Scripts\activate.bat # deactive env: deactive
import click

# use this file as library if imported else run main + PyCharm-Support
# @see https://www.youtube.com/watch?v=g_wlZ9IhbTs&ab_channel=mCoding
@click.command()
@click.argument('name')
@click.option('--greeting', '-g')
def main(name, greeting):
    click.echo("{}, {}".format(greeting, name))

if __name__ == "__main__":
    main()