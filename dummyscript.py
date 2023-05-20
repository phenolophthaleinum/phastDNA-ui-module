import time
import logging
import argparse
import sys


# function for overriding uncaught exceptions - sends to logging
def my_exception_handler(exc_type, exc_value, exc_traceback):
    logging.exception("Uncaught exception", exc_info=(exc_type, exc_value, exc_traceback))


def run(task_id):
    # define logging properties; from now - every message should be a *log*
    logging.basicConfig(
                    filename=f'{task_id}.log',
                    filemode='a',
                    format='%(asctime)s,%(msecs)d %(name)s %(levelname)s %(message)s',
                    datefmt='%H:%M:%S',
                    level=logging.DEBUG)
    
    # apply override for uncaught exceptions
    sys.excepthook = my_exception_handler

    logging.info(f"start {task_id}")
    time.sleep(0.5)
    logging.info("reading data")
    time.sleep(7)
    logging.info("++training")
    for x in range(0, 100, 5):
        logging.info(f"training...{x}")
        time.sleep(0.5)
        # exceptions for error handling in the app
        if x == 45:
            # raise Exception("sample exception")
            try:
                res = 3/0
            except:
            #     logging.exception("Error: -1")
                raise TypeError

    # word 'finished will signalise the sucessful run'
    logging.info(f"finished {task_id}")


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('-l')

    args = parser.parse_args()
    run(args.l)


