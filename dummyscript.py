import time
import logging
import argparse


def run(task_id):
    logging.basicConfig(filename=f'{task_id}.log',
                    filemode='a',
                    format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
                    datefmt='%H:%M:%S',
                    level=logging.DEBUG)

    logging.info("start")
    time.sleep(0.5)
    logging.info("reading data")
    time.sleep(2)
    logging.info("training")
    time.sleep(10)
    logging.info("finished")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-l')

    args = parser.parse_args()
    run(args.l)


